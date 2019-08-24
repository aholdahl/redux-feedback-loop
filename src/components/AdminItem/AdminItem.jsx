import React, {Component} from 'react';
import axios from 'axios';

class AdminItem extends Component {

    handleDelete = ()=>{
        //need to create an "are you sure?"" dialogue
        axios.delete(`/feedback/${this.props.item.id}`)
        .then((response)=>{
            console.log(response.status);
            this.props.getHistory();
        }).catch((error)=>{
            console.log(error)
        })
    }

    render (){
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.feeling}</td>
                <td>{this.props.item.understanding}</td>
                <td>{this.props.item.support}</td>
                <td>{this.props.item.comments}</td>
                <td>{this.props.item.date}</td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        )
    }
}

export default AdminItem;