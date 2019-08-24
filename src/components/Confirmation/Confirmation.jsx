import React, { Component } from 'react';
import { Button } from '@material-ui/core';


class Confirmation extends Component {

    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h3>Thank you for your feedback!</h3>
                <Button variant="contained" color="primary" type="submit" onClick={this.handleClick}>Leave More Feedback</Button>
            </div>
        )
    }
}

export default Confirmation;