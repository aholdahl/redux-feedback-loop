import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    render() {
        console.log('Hello from Feeling.')
        return (
            <p>Hello from Feeling.</p>
        )
    }
}

export default connect()(Feeling);