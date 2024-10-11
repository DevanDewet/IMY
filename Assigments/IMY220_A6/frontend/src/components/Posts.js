import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 20000); 
    return () => clearTimeout(loadingTimer);
  }, []);

  const fetchPosts = async () => {
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch posts');
      }

      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        throw new Error('Fetched data is not in the expected format');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      fetchPosts();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>Loading posts from backend pls wait 20 seconds and if it shows error then just refresh and then it will work...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p style={{ fontSize: '1.5rem', color: 'red' }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post._id}
            post={post}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      ) : (
        <p style={{ fontSize: '1.125rem', color: '#888' }}>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
