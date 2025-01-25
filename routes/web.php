<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Models\User;
use \Illuminate\Support\Facades\Request;
use App\Http\Controllers\Auth\LoginController;
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
                        'can' => [
                            'edit' => \Illuminate\Support\Facades\Auth::user()->can('edit', $user),
                        ],
                    ];
                }),
            'filters' => Request::only(['search']),
            'can' => [
                'createUser' => \Illuminate\Support\Facades\Auth::user()->can('create', User::class),
            ],
        ]);
    });

    Route::get('users/create', function () {
        return inertia::render('Users/Create');
    })->can('create,App\Models\User');


    Route::post('users', function () {
        $attributes = Request::validate(
            [
                'name' => ['required'],
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]
        );
        User::create($attributes);
        return redirect('/users');
    });

    Route::get('/settings', function () {
        return inertia::render('Settings');
    });



});
