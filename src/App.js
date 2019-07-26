import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>Let's get this project started!!!</p>
        <Person name="Max" age="28"/>
        <Person name="Ellie" age="26">My Hobbies: Racing</Person>
        <Person name="Inna" age="25"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!'));
  }
}

export default App;
