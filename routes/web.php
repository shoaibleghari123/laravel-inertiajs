<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Models\User;
use \Illuminate\Support\Facades\Request;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\VoteController;


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

    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/create', [UserController::class, 'create']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('users/{user}/edit', [UserController::class, 'edit']);
    Route::post('users/{user}', [UserController::class, 'update']);
    Route::get('/users/{user}/delete', [UserController::class, 'destroy']);

    Route::post('/posts/{postId}/votes',[VoteController::class, 'store']);

    Route::resource('posts', PostController::class);
});
