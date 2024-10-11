import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
  const { userId } = useParams(); 
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        if (data.length > 0) {
          setPosts(data);
          setError('');
        } else {
          setError('No posts found for this user');
        }
      } catch {
        setError('Error fetching posts');
      }
    };

    getAllPosts();
  }, [userId]); 

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>User {userId}'s Posts</h2>
      {posts.map((post) => (
        <Post 
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default Posts;
