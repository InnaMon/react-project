import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

//the above are just default vales if we do note set up any other values
// within the AuthContext wrapping component 

export default authContext;