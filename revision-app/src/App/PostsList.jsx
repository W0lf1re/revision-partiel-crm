import { useEffect, useState } from "react";
import postsService from "../setup/services/post.service";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await postsService.getPosts();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Posts List</h1>

      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.description}</h2>
          <div>
            {post.comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
