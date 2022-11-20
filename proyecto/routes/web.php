<?php


use App\Htpp\Controllers\DispositivoController;
use App\Htpp\Controllers\RenderizadoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

/*
Route::get('/home', function () {
    return Inertia::render('Home');
});



Route::get('/render', function(){
    return Inertia::render('Published_main');
});
*/



Route::resource('renderizados', RenderizadoController::class)
    ->only(['index']);

//Para los dispositivos que se vayan a registrar
Route::resource('dispositivos', DispositivoController::class)
    ->only(['store'])
    ->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
