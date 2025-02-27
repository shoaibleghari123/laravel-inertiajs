<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(CommentRequest $request)
    {
        $post = Post::findOrFAIL($request->input('post_id'));
        $post->comments()->create($request->validated()+['user_id' => auth()->id()]);
        return redirect()->route('posts.index')->with('message', 'Comment added successfully.');
    }

    public function like(Request $request)
    {
        dd($request->all());
    }
}
