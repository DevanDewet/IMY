import React from 'react';
import { Link } from 'react-router-dom';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(error => console.error('Error fetching users:', error));
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        {this.state.users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
            <Link to={`/posts/${user.id}`}>
              <button>View Posts</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
