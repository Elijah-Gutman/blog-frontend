import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  const [posts, setPosts] = useState([]); // instead of: let posts = [];

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };
  useEffect(handleIndex, []);
  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
    </main>
  );
}
