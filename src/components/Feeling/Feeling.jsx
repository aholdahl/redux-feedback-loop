import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    handleSubmit = ()=>{
        this.props.history.push('/understanding');
    }

    render() {
        console.log('Hello from Feeling.')
        return (
            <button onClick={this.handleSubmit}>Next Up: Understanding</button>
        )
    }
}

export default connect()(Feeling);