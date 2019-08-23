import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleSubmit = () => {
        this.props.history.push('/comments');
    }

    render() {
        console.log('Hello from Support.');
        return (
            <button onClick={this.handleSubmit}>Next Up: Comments</button>
        )
    }
}

export default connect()(Support);