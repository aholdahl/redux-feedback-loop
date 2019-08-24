import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';


class AdminItem extends Component {

    handleDelete = () => {
        //need to create an "are you sure?"" dialogue
        axios.delete(`/feedback/${this.props.item.id}`)
            .then((response) => {
                console.log(response.status);
                this.props.getHistory();
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.feeling}</td>
                <td>{this.props.item.understanding}</td>
                <td>{this.props.item.support}</td>
                <td>{this.props.item.comments}</td>
                <td>{this.props.item.date}</td>
                <td><Button variant="contained" color="secondary" type="submit" onClick={this.handleDelete}>Delete</Button></td>
            </tr>
        )
    }
}

export default AdminItem;