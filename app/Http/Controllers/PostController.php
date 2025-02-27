<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use App\Services\PostService;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    private $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }
    public function index()
    {
        $posts = $this->postService->index();
        return inertia::render('Posts/Index', ['posts' => $posts]);
    }

    public function create()
    {
        return inertia::render('Posts/Create');
    }

    public function store(StorePostRequest $request)
    {
        $validated = $request->validated();
        DB::transaction(function () use($validated){
            $this->postService->store($validated);
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
        DB::transaction(function () use($validated, $post) {
            $this->postService->update($validated, $post);
        });
        return Redirect::route('posts.index')->with('message', 'Post updated successfully')->with('type', 'success');
    }

    public function destroy(Post $post)
    {
        if (!Gate::allows('delete', $post)) {
            abort(403, 'Unauthorized action.');
        }

        DB::transaction(function () use ($post) {
            $this->postService->delete($post);
        });
        return Redirect::route('posts.index')->with('message', 'Post and tags deleted successfully.')->with('type', 'success');
    }

    public function show(Post $post)
    {
        $this->postService->show($post);
        return inertia::render('Posts/Show', ['post' => $post]);
    }
}
