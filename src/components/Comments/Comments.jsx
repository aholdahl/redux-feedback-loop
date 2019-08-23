import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        //dispatch input to redux
        //if stored in local state, clear local state upon successful dispatch

        //send axios post request from reduxStore to database
        //reset reduxStore to default values
        this.props.history.push('/');
    }

    render (){
        console.log('Hello from Comments.')
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Anything else you would like us to know?</p>
                <input type="text" /> 
                <br />
                <button>Submit Feedback</button>
            </form>
            )
    }
}

export default connect()(Comments);