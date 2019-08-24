import React, { Component } from 'react';

class Confirmation extends Component {

    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <p>Thank you for your feedback!</p>
                <button onClick={this.handleClick}>Leave More Feedback</button>
            </div>
        )
    }
}

export default Confirmation;