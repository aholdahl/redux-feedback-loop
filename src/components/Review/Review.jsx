import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClick = (event, url)=>{
        this.props.history.push(url);
    }

    handleSubmit = () => {
        axios.post('/feedback', this.props.reduxStore)
            .then((response) => {
                console.log(response.data);
                this.props.dispatch({
                    type: 'SUBMIT_ALL'
                })
                this.props.history.push('/confirmation')
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <p>Review your feedback below:</p>
                <ul>
                    <li>Feelings: {this.props.reduxStore.feelingReducer} <button onClick={(event)=>{this.handleClick(event, '/')}}>Edit</button></li>
                    <li>Understanding: {this.props.reduxStore.understandingReducer} <button onClick={(event) => { this.handleClick(event, '/understanding') }}>Edit</button></li>
                    <li>Support: {this.props.reduxStore.supportReducer}  <button onClick={(event) => { this.handleClick(event, '/support') }}>Edit</button></li>
                    <li>Comments: {this.props.reduxStore.commentsReducer} <button onClick={(event) => { this.handleClick(event, '/comments') }}>Edit</button></li>
                </ul>
                <button onClick={this.handleSubmit}>Submit Feedback</button>
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