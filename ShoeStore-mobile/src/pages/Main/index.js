import React from 'react';
import ProductSection from '../../components/productSection/index';
import { Container, ProductContainer } from './styles';

const Main = ({ navigation }) => {
    return (
        <Container>
            <ProductContainer>
                <ProductSection navigation={navigation} />
            </ProductContainer>
        </Container>
    );
};

export default Main;
