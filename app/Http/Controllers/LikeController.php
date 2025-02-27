<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class LikeController extends Controller
{
    public function like(Request $request)
    {
        $request->validate([
            'likeable_id' => 'required|integer',
            'likeable_type' => 'required|string|in:comment,post'
        ]);

        $likeableType = $request->likeable_type === 'comment' ? Comment::class : Post::class;

        $existingLike = Like::where([
            'user_id' => auth()->id(),
            'likeable_id' => $request->likeable_id,
            'likeable_type' => $likeableType
        ])->first();

        if ($existingLike) {
            return Redirect::route('posts.index')->with('message', 'Already liked')->with('type', 'info');
        }

        $response = Like::create([
            'user_id' => auth()->id(),
            'likeable_id' => $request->likeable_id,
            'likeable_type' => $likeableType
        ]);
        return Redirect::route('posts.index')->with('message', 'liked recorded')->with('type', 'info');
    }
}
