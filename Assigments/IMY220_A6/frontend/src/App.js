import React from 'react';
import './tailwind.css';
import Posts from './components/Posts'; 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="bg-blue-500 text-white p-4">
        </header>
        <main className="p-4">
          <Posts /> 
        </main>
      </div>
    );
  }
}

export default App;
