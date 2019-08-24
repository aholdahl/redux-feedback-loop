import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from '@material-ui/core';


class Review extends Component {

    handleClick = (event, url) => {
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
                <h3>Review your feedback below:</h3>
                <ul className="myLists">
                    {/* Need to find a way so the old answers still display when the user returns to an old page */}
                    <li className="list-group-item">Feelings: {this.props.reduxStore.feelingReducer} <Button variant="contained" color="secondary" type="submit" onClick={(event) => { this.handleClick(event, '/') }}>Edit</Button></li>
                    <li className="list-group-item">Understanding: {this.props.reduxStore.understandingReducer} <Button variant="contained" color="secondary" type="submit" onClick={(event) => { this.handleClick(event, '/understanding') }}>Edit</Button></li>
                    <li className="list-group-item">Support: {this.props.reduxStore.supportReducer}  <Button variant="contained" color="secondary" type="submit" onClick={(event) => { this.handleClick(event, '/support') }}>Edit</Button></li>
                    <li className="list-group-item">Comments: {this.props.reduxStore.commentsReducer} <Button variant="contained" color="secondary" type="submit" onClick={(event) => { this.handleClick(event, '/comments') }}>Edit</Button></li>
                </ul>
                <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Submit Feedback</Button>
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