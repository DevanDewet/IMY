const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const router = express.Router();
const uri = "mongodb://mongo_db:27017/posts_db";
let db, postsCollection;


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db();
    postsCollection = db.collection('posts');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('MongoDB connection error:', err));

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await postsCollection.find().toArray();
    res.json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err); 
    res.status(500).json({ message: err.message });
  }
});



// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const result = await postsCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Deleted post' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a post by ID
router.put('/:id', async (req, res) => {
  const updatedPost = {
    $set: {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      updatedAt: new Date()
    }
  };

  try {
    const result = await postsCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      updatedPost
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
