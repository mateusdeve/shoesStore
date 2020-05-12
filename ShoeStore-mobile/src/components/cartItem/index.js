import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Img from '../../assets/images/img.png';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
    Card,
    Item,
    ItemPicture,
    ItemDescription,
    ItemTitle,
    ItemPrice,
    NumberItens,
    TextIten,
    ItenFooter,
    ItemBody,
    ItenTotalPrice,
} from './styles';

const CartItem = ({
    navigation,
    products,
    total,
    removeFromCart,
    updateAmountRequest,
}) => {
    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    return (
        <Card>
            <Item>
                <ItemBody>
                    <ItemPicture source={Img} />
                    <TextIten>
                        <ItemDescription>
                            <ItemTitle>Nome do produto</ItemTitle>
                            <ItemPrice>R$ 199,00</ItemPrice>
                        </ItemDescription>
                    </TextIten>
                </ItemBody>
                <ItenFooter>
                    <NumberItens value="3" />
                    <ItenTotalPrice>R$ 199,00</ItenTotalPrice>
                </ItenFooter>
            </Item>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    products: state.cart.map((product) => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
        priceFormatted: formatPrice(product.price),
    })),
    total: formatPrice(
        state.cart.reduce(
            (total, product) => total + product.price * product.amount,
            0
        )
    ),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
