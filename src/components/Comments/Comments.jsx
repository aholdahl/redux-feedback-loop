import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        console.log('Hello from Comments.')
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Anything else you would like us to know?</p>
                <input type="text" onChange={(event) => { this.handleChange(event) }} />
                <br />
                <button>Up Next: Review</button>
            </form>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return{
        reduxStore
    }
}

export default connect(mapStateToProps)(Comments);