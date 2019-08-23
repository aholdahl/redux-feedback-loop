import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    render (){
        console.log('Hello from Comments.')
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Anything more you would like us to know?</p>
                <input type="text" /> 
                <br />
                <button>Submit Feedback</button>
            </form>
            )
    }
}

export default connect()(Comments);