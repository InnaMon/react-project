import React, { Component } from 'react';
import Aux from "./../../hoc/Auxillary";

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p 
                onClick={this.props.click}>
                I am {this.props.name} and I am {this.props.age} years old!
                </p>

                <p>
                {this.props.children}
                </p>

                <input 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                />
            </Aux>
        );
    }
}

export default Person;



// import classes from './Person.module.css';

// <div className={classes.Person}>
// </div>
