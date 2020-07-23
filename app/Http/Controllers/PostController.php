<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
use Image;
use Auth;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all_post(){
        $posts = Post::with('user', 'category')->orderBy('id' , 'desc')->get();
        return response()->json([
            'posts'=>$posts
        ],200);
     }
     
     public function save_post(Request $request)
     {
        $strpost = strpos($request->image,';');
        $sub = substr($request->image,0,$strpost);
        $ex= explode('/',$sub)[1];
        $name= time().".".$ex;
        $img = Image::make($request->image)->resize(300, 200);
        $upload_path = public_path()."/uploadimage/";
        $img->save($upload_path.$name);
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->cat_id = $request->cat_id;
        $post->user_id = Auth::user()->id;
        $post ->image = $name;
        $post->save();
     }

     public function delete_post($id)
     {
         $post = Post::find($id);
         $image_path = public_path()."/uploadimage/";
         $image = $image_path.$post->image;
         if(file_exists($image))
         {
            @unlink($image);
         }
         $post->delete();
     }

     public function edit_post($id)
     {
         $post = Post::find($id);
         return response()->json([
            'post'=>$post
        ],200);
     }

     public function update_post(Request $request, $id)
     {
      dd($request->all());
      $post = Post::find($id);
      $this->validate($request,[
          'title'=>'required|min:2|max:50',
          'description'=>'required|min:2|max:1000'
      ]);

      if($request->image!=$post->image){
          $strpos = strpos($request->image,';');
          $sub = substr($request->image,0,$strpos);
          $ex = explode('/',$sub)[1];
          $name = time().".".$ex;
          $img = Image::make($request->image)->resize(200, 200);
          $upload_path = public_path()."/uploadimage/";
          $image = $upload_path. $post->image;
          $img->save($upload_path.$name);

          if(file_exists($image)){
              @unlink($image);
          }
      }else{
          $name = $post->image;
      }

      $post->title = $request->title;
      $post->description = $request->description;
      $post->cat_id = $request->cat_id;
      $post->user_id = Auth::user()->id;
      $post->image = $name;
      $post->save();
      
     }

}
