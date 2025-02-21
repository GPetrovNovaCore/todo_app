<?php

use App\Http\Controllers\Api\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('notes', [NoteController::class, 'index']);
