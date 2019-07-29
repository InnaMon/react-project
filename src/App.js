import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 35}, 
      {name: "Ellie", age: 26},
      {name: "Inna", age: 25}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  } 

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Maximus", age: 35}, 
        {name: event.target.value, age: 26},
        {name: "Inna", age: 27}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>Let's get this project started!!!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!'));
  }
}

export default App;

/*
state = {
  persons: [
    {name: "Max", age: 35}, 
    {name: "Ellie", age: 26},
    {name: "Inna", age: 25}
  ]
};

switchNameHandler = () => {
  // console.log('was clicked');
  // this.state.persons[0].name = "Maximus";
  this.setState({
    persons: [
      {name: "Maximus", age: 35}, 
      {name: "Ellie", age: 26},
      {name: "Inna", age: 27}
    ]
  });
} */
