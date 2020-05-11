import React from 'react';
import Img from '../../assets/images/img.png';

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

const CartItem = () => {
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

export default CartItem;
