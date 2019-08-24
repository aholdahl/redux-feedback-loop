import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class Support extends Component {
    state = { support: "" }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.support === "") {
            alert('Field cannot be blank.');
        } else {
            this.props.dispatch({
                type: 'ADD_SUPPORT',
                payload: this.state.support
            })
            this.setState({ support: "" })
            this.props.history.push('/comments');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>How well are you being supported?</h3>
                <input className="myInputs" type="number" min="1" max="5" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <Button variant="contained" color="primary" type="submit">Next Up: Comments</Button>
            </form>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Support);