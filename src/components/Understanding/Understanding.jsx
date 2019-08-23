import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render() {
        console.log('Hello from Understanding.');
        
        return (
            <p>Hello from Understanding.</p>
        )
    }
}

export default connect()(Understanding);