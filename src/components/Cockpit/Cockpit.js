import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect'); 
        }
    }, [] );

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push( classes.red );
    } 
    if (props.personsLength <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Let's get this project started!!!</p>
            <button
            ref={toggleBtnRef}
            className={btnClass} 
            // style={style}
            onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);