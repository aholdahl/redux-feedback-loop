import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

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
                <h3>How are you feeling today?</h3>
                <input className="myInputs" type="number" min="1" max="5" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <Button variant="contained" color="primary" type="submit">Next Up: Understanding</Button>
            </form>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        feeling: reduxStore.feelingReducer
    }
}

export default connect(mapStateToProps)(Feeling);