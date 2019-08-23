import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    handleSubmit = () => {
        this.props.history.push('/support');
    }

    render() {
        console.log('Hello from Understanding.');        
        return (
            <button onClick={this.handleSubmit}>Next Up: Support</button>
        )
    }
}

export default connect()(Understanding);