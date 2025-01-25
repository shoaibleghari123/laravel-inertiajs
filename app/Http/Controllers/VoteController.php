<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function store(Request $request, $postId)
    {
        $request->validate([
            'vote' => ['required', 'in:up,down'],
        ]);

        $vote = auth()->user()->votes()->updateOrCreate(
            ['post_id' => $postId],
            ['vote' => $request->vote]
        );

        return redirect()->back();
    }
}
