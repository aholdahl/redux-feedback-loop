import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        //show alert if input is blank
        //dispatch input to redux
        //if stored in local state, clear local state upon successful dispatch
        this.props.history.push('/support');
    }

    render() {
        console.log('Hello from Understanding.');        
        return (
            <form onSubmit={this.handleSubmit}>
                <p>How well do you understand today's material?</p>
                <input type="number" /> {/* need to set a max number */}
                <br />
                <button>Next Up: Support</button>
            </form>
        )
    }
}

export default connect()(Understanding);