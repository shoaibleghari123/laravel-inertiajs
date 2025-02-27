<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

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
        return redirect()->back()->with('message', 'Your vote has been recorded')->with('type', 'success');
    }
}
