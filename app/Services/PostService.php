<?php

namespace App\Services;

use App\Models\Like;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PostService {
    public function index()
    {
        return Post::query()
            ->withCount('votes')
            ->withCount('comments')
            ->with('tags')
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
    }

    public function store($validatedData)
    {
        $post = Post::create([
            'title' => $validatedData['title'],
            'body' => $validatedData['body'],
            'user_id' => auth()->id(),
        ]);
        collect($validatedData['tags'])->each(function ($tagData) use ($post) {
            $tag = Tag::firstOrCreate(['name' => $tagData['name']]);
            $post->tags()->attach($tag->id);
        });
        return $post;
    }

    public function update($validated, $post)
    {
        $post->update(['title' => $validated['title'], 'body' => $validated['body']]);
        $tagIds = collect($validated['tags'])->map(function ($tagData) {
            return Tag::updateOrCreate(
                ['id' => $tagData['id'] ?? null],
                ['name' => $tagData['name']]
            )->id;
        })->toArray();

        $post->tags()->sync($tagIds);
        return true;
    }

    public function show($post)
    {
        $post->loadCount([
            'votes as total_votes',
            'votes as up_votes_count' => function ($query) {
                $query->where('vote', 'up');
            },
            'votes as down_votes_count' => function ($query) {
                $query->where('vote', 'down');
            }
        ]);
        return $post;
    }

    public function delete($post)
    {
        $tagIds = $post->tags()->pluck('tags.id');

        $commentIds = $post->comments()->pluck('id');
        Like::where('likeable_type', \App\Models\Comment::class)
            ->whereIn('likeable_id', $commentIds)
            ->delete();

        $post->tags()->detach();
        $post->delete();
        Tag::whereIn('id', $tagIds)->doesntHave('posts')->delete();
        return true;
    }
}
