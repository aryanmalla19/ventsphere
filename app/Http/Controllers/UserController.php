<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $data = User::paginate(7);
        return Inertia::render('Users/Index', compact('data'));
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);
        User::create($data);
        return redirect()->route('users.index')->with('message', "User successfully created.");
    }
}
