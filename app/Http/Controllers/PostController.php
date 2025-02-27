<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $posts = Post::query()
            ->withCount('votes')
            ->withCount('comments')
            ->with('tags')
           // ->with('comments')
            ->with('comments.user')
            ->with(['comments' => function ($query) {
                $query->withCount('likes');
            }])
            ->latest()
            ->paginate(5)
            ->through(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'body' => $post->body,
                    'votes_count' => $post->votes_count,
                    'comments_count' => $post->comments_count,
                    'tags' => $post->tags,
                    'comments' => $post->comments,
                    'user' => $post->comments->map(function ($comment) {
                        return $comment->user;
                    }),
                    'can' => [
                        'edit' => Auth::user()->can('edit', $post),
                        'delete' => Auth::user()->can('delete', $post),
                    ]
                ];
            });
     //   dd($posts);
        return inertia::render('Posts/Index', ['posts' => $posts]);
    }

    public function create()
    {
        return inertia::render('Posts/Create');
    }

    public function store(StorePostRequest $request)
    {
        $validated = $request->validated();

        $post = Post::create([
            'title' => $validated['title'],
            'body' => $validated['body'],
            'user_id' => auth()->id(),
        ]);
        collect($validated['tags'])->each(function ($tagData) use ($post) {
            $tag = Tag::firstOrCreate(['name' => $tagData['name']]);
            $post->tags()->attach($tag->id);
        });
        return Redirect::route('posts.index')->with('message', 'Post created successfully')->with('type', 'success');
    }

    public function edit(Post $post)
    {
        return inertia::render('Posts/Edit', ['post' => $post, 'tags' => $post->tags]);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        if (!Gate::allows('update', $post)) {
            abort(403, 'Unauthorized action.');
        }

        $validated = $request->validated();
        $post->update(['title' => $validated['title'], 'body' => $validated['body']]);
        $tagIds = collect($validated['tags'])->map(function ($tagData) {
            return Tag::updateOrCreate(
                ['id' => $tagData['id'] ?? null],
                ['name' => $tagData['name']]
            )->id;
        })->toArray();

        $post->tags()->sync($tagIds);
        return Redirect::route('posts.index')->with('message', 'Post updated successfully')->with('type', 'success');
    }

    public function destroy(Post $post)
    {
        if (!Gate::allows('delete', $post)) {
            abort(403, 'Unauthorized action.');
        }

        DB::beginTransaction();
        try {
            $tagIds = $post->tags()->pluck('tags.id');

            $post->tags()->detach();
            $post->delete();
            Tag::whereIn('id', $tagIds)->doesntHave('posts')->delete();

            DB::commit();
        } catch (Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
            return redirect()->back()->with('message', 'Failed to save');
        }
        return Redirect::route('posts.index')->with('message', 'Post and tags deleted successfully.')->with('type', 'success');
    }

    public function show(Post $post)
    {
        $post = Post::query()
            ->withCount('votes as total_votes')
            ->withCount(['votes as up_votes_count' => function ($query) {
                $query->where('vote', 'up');
            }])->withCount(['votes as down_votes_count' => function ($query) {
                $query->where('vote', 'down');
            }])->where('id', $post->id)->first();

        return inertia::render('Posts/Show', ['post' => $post]);
    }
}
