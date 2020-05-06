/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Main extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');
        const data = response.data.map((product) => ({
            ...product,
            priceFormated: formatPrice(product.price),
        }));
        this.setState({ products: data });
    }

    handleAddProduct = (product) => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    render() {
        const { products } = this.state;
        const { cartSize } = this.props;

        return (
            <ProductList>
                {products.map((product) => (
                    <li key={String(product.id)}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormated} </span>
                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" />
                                {cartSize}
                            </div>
                            <span>ADCIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

export default connect((state) => ({
    cartSize: state.cart.length,
}))(Main);
