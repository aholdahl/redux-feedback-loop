import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/understanding');
    }

    render() {
        console.log('Hello from Feeling.')
        return (
            <form onSubmit={this.handleSubmit}>
                <p>How are you feeling today?</p>
                <input type="number" /> {/* need to set a max number */}
                <br />
                <button>Next Up: Understanding</button>
            </form>
        )
    }
}

export default connect()(Feeling);