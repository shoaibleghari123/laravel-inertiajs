<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::withCount('votes')
            ->with('tags')->get();
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
        ]);
        collect($validated['tags'])->each(function ($tagData) use ($post) {
            $tag = Tag::firstOrCreate(['name' => $tagData['name']]);
            $post->tags()->attach($tag->id);
        });
       // dd($validated, $request->all(), $validated->except(['title']));
      //  Post::create($validated);
        return Redirect::route('posts.index')->with('message', 'Post created.');
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
