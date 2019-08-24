import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class Feeling extends Component {
    state = { feeling: "" }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.feeling === "") {
            alert('Field cannot be blank.');
        } else {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state.feeling
            })
            this.setState({ feeling: "" })
            this.props.history.push('/understanding');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>How are you feeling today?</p>
                <input type="number" min="1" max="5" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <button>Next Up: Understanding</button>
            </form>
        )
    }
}

export default connect()(Feeling);