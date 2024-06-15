import React, {useEffect, useState} from 'react'
import {Button} from "../components/button.tsx";
import {create, read} from "../api/posts.tsx";
import {Sidebar} from "../components/sidebar.tsx";
import {Post} from "../components/post.tsx";
import {Loader} from "../components/loader.tsx";
import {postdto} from "../dto/post.tsx";
export const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<postdto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getPosts = () => {
    read().then((r)=>{setLoading(false);setPosts(r);})
  }
  useEffect(() => {
    getPosts()
  }, []);
  return (
    <>
    <div className="absolute w-full grid place-items-center">
      Welcome to the Posts Page
      <textarea id="posttextareathing" className="w-[75%] border-2"></textarea>
      <div>
        <Button text = {"Post"} onClick={() => {create((document.getElementById(
          "posttextareathing")! as HTMLInputElement).value);getPosts()}}/>
        <Button text = {"Refresh"} onClick={() => getPosts()}/>
      </div>
      {loading?<Loader/>:posts.map((e)=><Post data = {e}/>)}
    </div>
      <Sidebar/>
    </>
  )
}

