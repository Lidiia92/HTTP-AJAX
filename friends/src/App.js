import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response); 
        this.setState({friends: response.data})
      })
      .catch(err => console.log(err));
      
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => <div>{friend.name}</div>)}
      </div>
    );
  }
}

export default App;