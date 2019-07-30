import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: '123', name: "Max", age: 35}, 
      {id: '456', name: "Ellie", age: 26},
      {id: '789', name: "Inna", age: 25}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  } 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Onject.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render () {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '3px solid lightgreen',
    //   padding: '8px'
    // };
    
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary>
              <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            /></ ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // style.border = '3px solid pink';

    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    } 
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Hello World!</h1>
        <p className={assignedClasses.join(' ')}>Let's get this project started!!!</p>
        <button
        className={btnClass} 
        // style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;