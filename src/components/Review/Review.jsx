import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClick = () => {
        axios.post('/feedback', this.props.reduxStore)
            .then((response) => {
                console.log(response.data);
                this.props.dispatch({
                    type: 'SUBMIT_ALL'
                })
                // this.props.history.push('/')
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <p>Review your feedback below:</p>
                <ul>
                    <li>Feelings: {this.props.reduxStore.feelingReducer}</li>
                    <li>Understanding: {this.props.reduxStore.understandingReducer}</li>
                    <li>Support: {this.props.reduxStore.supportReducer}</li>
                    <li>Comments: {this.props.reduxStore.commentsReducer}</li>
                </ul>
                <button onClick={this.handleClick}>Submit Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Review);