import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import Posts from './components/Posts';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/posts/:userId" element={<Posts />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
