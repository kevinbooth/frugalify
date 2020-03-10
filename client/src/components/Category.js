import React, { Component } from 'react';
import axios from 'axios';

class Category extends Component {
    state = {

    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/')
            .then()
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return(
            <div className="category">
                <div className="category__title">{this.props.type}</div>
            </div>
        );
    }
}

export default Category;