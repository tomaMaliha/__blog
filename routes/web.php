<?php

use Illuminate\Support\Facades\Route;

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
    return view('frontend/index');
});
Route::get('/welcome', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


//Route::get('/{anypath}' , 'HomeController@index')->where('path' , '.*');



Route::group(['middleware' => ['auth']], function () {

//category

Route::post('/add_category' , 'CategoryController@add_category');
Route::get('/category' , 'CategoryController@all_category');
Route::get('/category/{id}' , 'CategoryController@delete_category');
Route::get('/editcategory/{id}' , 'CategoryController@edit_category');
Route::post('/updatecategory/{id}' , 'CategoryController@update_category');

//post

Route::get('/post','PostController@all_Post');
Route::post('/savepost' , 'PostController@save_post');
Route::get('/delete/{id}' , 'PostController@delete_post');
Route::get('/post/{id}' , 'PostController@edit_post');
Route::post('/update/{id}','PostController@update_post');
});

Route::get('/blogpost' , 'BlogController@get_all_blog_post');
Route::get('/singlePost/{id}' , 'BlogController@getPost_by_id');
Route::get('/categories' , 'BlogController@get_all_category');
Route::get('/categorypost/{id}' , 'BlogController@get_all_postByCat');
Route::get('/search' , 'BlogController@searchPost');