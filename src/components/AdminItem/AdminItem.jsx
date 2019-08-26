import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';
import DeleteIcon from '@material-ui/icons/Delete';

class AdminItem extends Component {

    handleDelete = () => {
        swal({
            title: 'Please confirm',
            text: 'Are you sure you want to delete?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if(willDelete){
                this.confirmDelete();
                swal('Completed',{
                    icon: "success",
                })
            }
        }
        )
    }

    confirmDelete = ()=>{
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
                <td><Button variant="contained" color="secondary" type="submit" onClick={this.handleDelete}>Delete <DeleteIcon /></Button></td>
            </tr>
        )
    }
}

export default AdminItem;