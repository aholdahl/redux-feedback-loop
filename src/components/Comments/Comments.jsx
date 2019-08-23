import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

    handleSubmit = () => {
        this.props.history.push('/');
    }

    render (){
        console.log('Hello from Comments.')
        return (
            <button onClick={this.handleSubmit}>Submit Feedback</button>
        )
    }
}

export default connect()(Comments);