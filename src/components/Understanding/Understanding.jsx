import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

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
                <h3>How well are you understanding the content?</h3>
                <input className="myInputs" type="number" min="1" max="5" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <Button variant="contained" color="primary" type="submit">Next Up: Support</Button>
            </form>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Understanding);