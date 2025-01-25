<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;
    public function create(User $user)
    {
        return $user->email === 'christine18@example.com';
    }

    public function edit(User $user, User $model)
    {
        //dd((bool) mt_rand(0, 1));
        return (bool) mt_rand(0, 1);
    }

}
