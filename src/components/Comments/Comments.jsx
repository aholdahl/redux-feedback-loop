import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class Comments extends Component {
    state = { comments: "" }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments
        })
        this.setState({ comments: "" })
        this.props.history.push('/review');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Anything else you would like us to know?</h3>
                <input className="myInputs" type="text" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <Button variant="contained" color="primary" type="submit">Up Next: Review</Button>
            </form>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Comments);