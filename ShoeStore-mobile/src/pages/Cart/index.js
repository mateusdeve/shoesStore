import React from 'react';
import CartItem from '../../components/cartItem/index';

import {
    Container,
    CardsContainer,
    TotalPrice,
    TotalLabel,
    ButtonConfirm,
    ButtonText,
} from './styles';

const Cart = () => {
    return (
        <Container>
            <CardsContainer>
                <CartItem />
                <TotalLabel>TOTAL</TotalLabel>
                <TotalPrice>R$ 1999,00</TotalPrice>
                <ButtonConfirm>
                    <ButtonText>FINALIZAR PEDIDO</ButtonText>
                </ButtonConfirm>
            </CardsContainer>
        </Container>
    );
};

export default Cart;
