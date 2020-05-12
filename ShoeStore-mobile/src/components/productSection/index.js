/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
    ProdutosSection,
    CardProduct,
    PrictureProduct,
    LabelProdcut,
    PriceProduct,
    ButtonGroup,
    ButtonCartNumber,
    ButtonLabel,
    CartWithProducts,
} from './styles';

class ProductSection extends Component {
    state = {
        products: {
            stock: [
                {
                    id: 1,
                    amount: 3,
                },
                {
                    id: 2,
                    amount: 5,
                },
                {
                    id: 3,
                    amount: 2,
                },
                {
                    id: 4,
                    amount: 1,
                },
                {
                    id: 5,
                    amount: 5,
                },
                {
                    id: 6,
                    amount: 10,
                },
            ],
            products: [
                {
                    id: 1,
                    title: 'Tênis de Caminhada Leve ',
                    price: 179.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                },
                {
                    id: 2,
                    title: 'Tênis VR com Detalhes Couro',
                    price: 139.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                },
                {
                    id: 3,
                    title: 'Tênis Adidas Duramo Lite 2.0',
                    price: 219.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
                },
                {
                    id: 5,
                    title: 'Tênis VR ',
                    price: 139.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                },
                {
                    id: 6,
                    title: 'Tênis Adidas Duramo Lite 2.0',
                    price: 219.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
                },
                {
                    id: 4,
                    title: 'Tênis Confortável',
                    price: 179.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                },
            ],
        },
    };

    handleAddProduct = (id) => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    render() {
        const { navigation } = this.props;
        const { products } = this.state.products;
        return (
            <ProdutosSection>
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <PrictureProduct source={{ uri: product.image }} />
                        <LabelProdcut>{product.title} </LabelProdcut>
                        <PriceProduct>
                            {formatPrice(product.price)}
                        </PriceProduct>
                        <ButtonGroup
                            onPress={() => this.handleAddProduct(product.id)}
                        >
                            <CartWithProducts>
                                <Icon name="cart-plus" size={20} color="#fff" />
                                <ButtonCartNumber>0</ButtonCartNumber>
                            </CartWithProducts>
                            <ButtonLabel>Adcionar</ButtonLabel>
                        </ButtonGroup>
                    </CardProduct>
                ))}
            </ProdutosSection>
        );
    }
}

const mapStateToProps = (state) => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
