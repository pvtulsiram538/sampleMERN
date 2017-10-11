/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component }
from 'react';
import LazyLoad
        from 'react-lazyload';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var items = [
            {title: 'Kitten 1', image: 'http://placekitten.com/311/313'},
            {title: 'Kitten 2', image: 'http://placekitten.com/302/302'},
            {title: 'Kitten 3', image: 'http://placekitten.com/303/303'},
            {title: 'Kitten 4', image: 'http://placekitten.com/304/304'},
            {title: 'Kitten 5', image: 'http://placekitten.com/305/305'},
            {title: 'Kitten 6', image: 'http://placekitten.com/306/306'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
            {title: 'Kitten 7', image: 'http://placekitten.com/307/307'},
            {title: 'Kitten 8', image: 'http://placekitten.com/308/308'},
            {title: 'Kitten 9', image: 'http://placekitten.com/310/310'},
            {title: 'Kitten 10', image: 'http://placekitten.com/311/311'},
        ];
        var itemViews = items.map((item, index) => {
            console.log(item);
            return (<LazyLoad key={index} height={200}>
                <div>
                    <img key ={index} src={item.image}/>
                </div>

            </LazyLoad>
                    );
        });
        return  (
                <div>
                    {itemViews}
                </div>
                );
    }

}


export default ProductList;
