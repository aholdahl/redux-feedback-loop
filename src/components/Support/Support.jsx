import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    render() {
        console.log('Hello from Support.');
        return (
            <p>Hello from Support.</p>
        )
    }
}

export default connect()(Support);