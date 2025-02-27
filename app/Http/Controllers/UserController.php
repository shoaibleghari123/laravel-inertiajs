<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
      $data = (new UserService())->index();
      return inertia::render('Users/index', $data);
    }

    public function create()
    {
        $this->middleware('can:create,App\Models\User');
        return inertia::render('Users/Create');
    }

    public function store(StoreUserRequest $request)
    {
        User::create($request->validated());
        return redirect('/users')->with('message', 'User created successfully')->with('type', 'success');
    }

    public function edit(User $user)
    {
        return inertia::render('Users/Edit', ['user' => $user,]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());
        return redirect('/users')->with('message', 'User updated successfully')->with('type', 'success');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect('/users')->with('message', 'User deleted successfully')->with('type', 'success');
    }

}
