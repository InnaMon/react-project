import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from "../hoc/Auxillary";
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: '123', name: "Max", age: 35}, 
      {id: '456', name: "Ellie", age: 26},
      {id: '789', name: "Inna", age: 25}
    ],
    showPersons: false,
    showCockpit: true,
    counter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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

    this.setState((prevState, props) => { 
      return {
        persons: persons, 
        counter: prevState.counter + 1  
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  removeCockpit = () => {
    this.setState({
      showCockpit: false
    })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render () {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    return (
      <Aux>
        <button 
        onClick={() => {
          this.removeCockpit()}}>
          Remove Cockpit
        </button>

        <AuthContext.Provider 
        value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }} >
          {this.state.showCockpit ? (
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length}
          toggle={this.togglePersonsHandler}
          /> ) : null }
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);