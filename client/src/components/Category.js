import React, { Component } from 'react';

class Category extends Component {

    render() {
        return(
            <div class="category">
                <div class="category__title">{this.props.type}</div>
            </div>
        );
    }
}

export default Category;