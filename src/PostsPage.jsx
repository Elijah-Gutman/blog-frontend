import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./modal";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";

export function PostsPage() {
  const [posts, setPosts] = useState([]); // instead of: let posts = [];
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false); // instead of: let isPostsShowVisible = false;
  const [currentPost, setCurrentPost] = useState({}); // instead of: let currentPost = {};

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };
  const handleCreate = (params) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      const newPost = response.data;
      setPosts([...posts, newPost]);
    });
  };
  const handleShow = (post) => {
    console.log("handleShow", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  useEffect(handleIndex, []); //instead of handleIndex();

  return (
    <main className="container">
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
        <PostsShow post={currentPost} />
      </Modal>
    </main>
  );
}
