import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem.jsx';

class Admin extends Component {

    componentDidMount() {
        this.getHistory();
    }

    getHistory =()=>{
        axios.get('/feedback')
            .then((response) => {
                this.props.dispatch({
                    type: 'SET_HISTORY',
                    payload: response.data
                });
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Supported</th>
                        <th>Comments</th>
                        <th>Date Submitted</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.history.map((item) => { return (<AdminItem key={item.id} item={item} getHistory={this.getHistory}/>) })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        history: reduxStore.historyReducer
    }
}

export default connect(mapStateToProps)(Admin);