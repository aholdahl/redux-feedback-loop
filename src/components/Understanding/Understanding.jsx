import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = { understanding: "" }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.understanding === "") {
            alert('Field cannot be blank.');
        } else {
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state.understanding
            })
            this.setState({ understanding: "" })
            this.props.history.push('/support');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>How well do you understand the material?</p>
                <input type="number" min="1" max="5" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <button>Next Up: Support</button>
            </form>
        )
    }
}

export default connect()(Understanding);