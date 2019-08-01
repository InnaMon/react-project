import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    } 
    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello World!</h1>
            <p className={assignedClasses.join(' ')}>Let's get this project started!!!</p>
            <button
            className={btnClass} 
            // style={style}
            onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;