import React, { Component } from 'react';

class Header extends Component{
    shouldComponentUpdate(){
        return false;
    }
    
    
    render(){return <h1>Robot Friends</h1>}
}


export default Header;