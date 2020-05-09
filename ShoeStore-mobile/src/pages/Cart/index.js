import React from 'react';

import {
    Container,
    CardsContainer,
    Card,
    Item,
    ItemPicture,
    ItemDescription,
    ItemTitle,
    ItemPrice,
    NumberItens,
    TotalPrice,
    TotalLabel,
} from './styles';

const Cart = () => {
    return (
        <Container>
            <CardsContainer>
                <Card>
                    <Item>
                        <ItemPicture />
                        <ItemDescription>
                            <ItemTitle>Nome do produto</ItemTitle>
                            <ItemPrice>R$ 199,00</ItemPrice>
                        </ItemDescription>
                        <NumberItens />
                        <TotalPrice>199,00</TotalPrice>
                    </Item>
                </Card>
                <TotalLabel>Total</TotalLabel>
                <TotalPrice>R$ 1999,00</TotalPrice>
            </CardsContainer>
        </Container>
    );
};

export default Cart;
