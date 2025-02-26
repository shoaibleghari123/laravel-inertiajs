<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Models\User;
use \Illuminate\Support\Facades\Request;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\VoteController;
use App\Http\Controllers\CommentController;


Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');



Route::middleware('auth')->group(function () {

    Route::get('/', function () {
        return inertia::render('Home');
    });

    Route::get('/settings', function () {
        return inertia::render('Settings');
    });

    Route::post('/posts/{postId}/votes',[VoteController::class, 'store']);

    Route::get('/users/{user}/delete', [UserController::class, 'destroy']);
    Route::resource('users', UserController::class);
    Route::resource('posts', PostController::class);
    Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');

});
