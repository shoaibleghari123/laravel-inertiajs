<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()
        ->when(request()->input('search'), function ($query, $search) {
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
                    'edit' => Auth::user()->can('edit', $user),
                    'delete' => Auth::user()->can('delete', $user),
                ],
            ];
        });
        $filters = request()->only(['search']);
        $can = [
            'createUser' => Auth::user()->can('create', User::class),
        ];

        return inertia::render('Users/index', [
            'users' => $users,
            'filters' => $filters,
            'can' => $can,
        ]);
    }

    public function create()
    {
        $this->middleware('can:create,App\Models\User');
        return inertia::render('Users/Create');
    }

    public function store(StoreUserRequest $request)
    {
        User::create($request->validated());
        return redirect('/users');
    }

    public function edit(User $user)
    {
        return inertia::render('Users/Edit', [
            'user' => $user,
        ]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());
        return redirect('/users');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect('/users');
    }

}
