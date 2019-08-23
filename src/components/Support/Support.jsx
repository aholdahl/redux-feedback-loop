import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        //show alert if input is blank
        //dispatch input to redux
        //if stored in local state, clear local state upon successful dispatch
        this.props.history.push('/comments');
    }

    render() {
        console.log('Hello from Support.');
        return (
            <form onSubmit={this.handleSubmit}>
                <p>How well are you being supported?</p>
                <input type="number" /> {/* need to set a max number */}
                <br />
                <button>Next Up: Comments</button>
            </form>        
            )
    }
}

export default connect()(Support);