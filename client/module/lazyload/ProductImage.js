/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ProductImage extends Component {
    constructor(props) {
        super(props);
    }
    static loader = '/loader.gif';
    static showImage = false;

    componentDidUpdate(prevProps) {
        if (!this.props.showImages && prevProps.viewport) {
            this.updatePosition();
        }
    }

    updatePosition = () => {
        var el = this.getDOMNode();
        this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
    }

    render() {
        var img = (this.props.showImage) ? this.props.src : this.props.loader;
        return (
                React.DOM.img({src: img, alt: this.props.alt})
                );
    }
}

export default ProductImage;