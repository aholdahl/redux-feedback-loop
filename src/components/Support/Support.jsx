import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/comments');
    }

    render() {
        console.log('Hello from Support.');
        return (
            <form onSubmit={this.handleSubmit}>
                <p>How supportive is the Prime staff?</p>
                <input type="number" /> {/* need to set a max number */}
                <br />
                <button>Next Up: Comments</button>
            </form>        
            )
    }
}

export default connect()(Support);