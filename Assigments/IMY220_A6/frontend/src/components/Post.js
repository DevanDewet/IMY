import React from 'react';

const Post = ({ post, onDelete, onUpdate }) => {
  const { title, content, author } = post;

  const handleDeleteClick = () => {
    onDelete(post._id);
  };

  const handleUpdateClick = () => {
    const updatedData = { 
      title: 'Updated Title', 
      content: 'Updated Content',
      author: {
        name: "Updated author name",         
        user_id: "updatedid", 
        email: "updatedid@example.com" 
      }
    };
    onUpdate(post._id, updatedData);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '16px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a4a4a', marginBottom: '12px' }}>{title}</h2>
      <p style={{ color: '#7a7a7a', marginBottom: '12px' }}>{content}</p>
      <div style={{ borderTop: '1px solid #ddd', paddingTop: '12px', marginTop: '12px' }}>
        <p style={{ color: '#6a6a6a' }}>Author: <span style={{ fontWeight: 'bold' }}>{author.name}</span></p>
        <p style={{ color: '#6a6a6a' }}>Email: {author.email}</p>
        <p style={{ color: '#6a6a6a' }}>User ID: {author.user_id}</p>
      </div>
      <div style={{ marginTop: '16px', display: 'flex' }}>
        <button 
          onClick={handleDeleteClick} 
          style={{ padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease', marginRight: '8px', backgroundColor: '#e63946', color: '#ffffff' }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#c72c34'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#e63946'}
        >
          Delete
        </button>
        <button 
          onClick={handleUpdateClick} 
          style={{ padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease', backgroundColor: '#4e8eff', color: '#ffffff' }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#3a6bbf'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#4e8eff'}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Post;
