<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::withCount('votes')->get();
        return inertia::render('Posts/Index', ['posts' => $posts]);
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
