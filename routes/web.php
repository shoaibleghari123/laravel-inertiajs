<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Models\User;
use \Illuminate\Support\Facades\Request;
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

Route::get('/', function () {
    return inertia::render('Home');
});

Route::get('/users', function () {
    return inertia::render('Users/index', [
        'users' => User::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('name', 'LIKE', "%{$search}%");
            })
            ->paginate(10)
            ->withQueryString()
            ->through(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ];
        }),
        'filters' => Request::only(['search']),
    ]);
});

Route::get('users/create', function () {
    return inertia::render('Users/Create');
});


Route::post('users', function () {
    //validate the request
    $attributes = Request::validate(
        [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]
    );
    //create the user
    User::create($attributes);
    return redirect('/users');
    //redirect to the users page
});

Route::get('/settings', function () {
    return inertia::render('Settings');
});


Route::post('/logout', function () {
    dd(request('foo'));
});
