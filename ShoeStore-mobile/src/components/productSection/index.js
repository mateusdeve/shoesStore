import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import img from '../../assets/images/img.png';

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

const ProductSection = ({ navigation }) => {
    return (
        <ProdutosSection>
            <CardProduct>
                <PrictureProduct source={img} />
                <LabelProdcut>nome do produto</LabelProdcut>
                <PriceProduct>R$ 199,00</PriceProduct>
                <ButtonGroup onPress={() => navigation.navigate('Cart')}>
                    <CartWithProducts>
                        <Icon name="cart-plus" size={20} color="#fff" />
                        <ButtonCartNumber>01</ButtonCartNumber>
                    </CartWithProducts>
                    <ButtonLabel>Adcionar</ButtonLabel>
                </ButtonGroup>
            </CardProduct>
            <CardProduct>
                <PrictureProduct source={img} />
                <LabelProdcut>nome do produto</LabelProdcut>
                <PriceProduct>R$ 199,00</PriceProduct>
                <ButtonGroup>
                    <CartWithProducts>
                        <Icon name="cart-plus" size={20} color="#fff" />
                        <ButtonCartNumber>01</ButtonCartNumber>
                    </CartWithProducts>
                    <ButtonLabel>Adcionar</ButtonLabel>
                </ButtonGroup>
            </CardProduct>
            <CardProduct>
                <PrictureProduct source={img} />
                <LabelProdcut>nome do produto</LabelProdcut>
                <PriceProduct>R$ 199,00</PriceProduct>
                <ButtonGroup>
                    <CartWithProducts>
                        <Icon name="cart-plus" size={20} color="#fff" />
                        <ButtonCartNumber>01</ButtonCartNumber>
                    </CartWithProducts>
                    <ButtonLabel>Adcionar</ButtonLabel>
                </ButtonGroup>
            </CardProduct>
            <CardProduct>
                <PrictureProduct source={img} />
                <LabelProdcut>nome do produto</LabelProdcut>
                <PriceProduct>R$ 199,00</PriceProduct>
                <ButtonGroup>
                    <CartWithProducts>
                        <Icon name="cart-plus" size={20} color="#fff" />
                        <ButtonCartNumber>01</ButtonCartNumber>
                    </CartWithProducts>
                    <ButtonLabel>Adcionar</ButtonLabel>
                </ButtonGroup>
            </CardProduct>
        </ProdutosSection>
    );
};

export default ProductSection;
