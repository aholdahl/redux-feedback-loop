import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    render (){
        console.log('Hello from Comments.')
        return (
            <p>Hello from Comments.</p>
        )
    }
}

export default connect()(Comments);