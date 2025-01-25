<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Models\User;
use \Illuminate\Support\Facades\Request;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');

Route::middleware('auth')->group(function () {

    Route::get('/', function () {
        return inertia::render('Home');
    });

    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/create', [UserController::class, 'create']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('users/{user}/edit', [UserController::class, 'edit']);
    Route::post('users/{user}', [UserController::class, 'update']);
    Route::get('/users/{user}/delete', [UserController::class, 'destroy']);

    Route::get('/settings', function () {
        return inertia::render('Settings');
    });

});
