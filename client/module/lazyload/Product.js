/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false
        };
    }
    static showImage = false;
    componentWillMount() {
        // allow image display override
        if (this.props.showImage) {
            setShowImage(true);
        }
    }

    updateImagePosition = (top, height) => {
        // image is already displayed, no need to check anything
        if (this.state.showImage) {
            return;
        }

        // update showImage state if component element is in the viewport
        var min = this.props.viewport.top;
        var max = this.props.viewport.top + this.props.viewport.height;
        if ((min <= (top + height) && top <= (max - 300))) {
            this.setShowImage(true);
        }
    }

    setShowImage = (show) => {
        this.setState({
            showImage: !!(show)
        });
    }

    render() {
        return (
                <div>
                    <h2>{this.props.title}</h2>
                    <div>
                        <ProductImage src={this.props.image} alt={this.props.title} viewport={this.props.viewport} showImage={this.state.showImage}
                                      updateImagePosition={this.updateImagePosition} />
                    </div>
                </div>
                );
    }
}

export default Product;