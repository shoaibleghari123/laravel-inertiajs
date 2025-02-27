<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function store(CommentRequest $request)
    {
        $post = Post::findOrFAIL($request->input('post_id'));
        $post->comments()->create($request->validated()+['user_id' => auth()->id()]);
        return Redirect::route('posts.index')->with('message', 'Comment added successfully')->with('type', 'success');
    }

    public function commentsLike(Comment $comment)
    {
        $users = $comment->likes()->with('user:id,name')->get()->pluck('user');
        return response()->json($users);
    }
}
