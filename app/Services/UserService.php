<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserService {
    public function index()
    {
        $data = [];
        $users = User::query()
            ->when(request()->input('search'), function ($query, $search) {
                $query->where('name', 'LIKE', "%{$search}%");
            })->latest()
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
        $data['users'] = $users;
        $data['filters'] = $filters;
        $data['can'] = $can;
        return $data;
    }
}
