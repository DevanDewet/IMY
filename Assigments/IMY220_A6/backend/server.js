const path = require('path');
const express = require('express');
const postsRouter = require('./routes/posts');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  
app.use(cors());          


app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/posts', postsRouter); 


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});