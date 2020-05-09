import React from 'react';
import ProductSection from '../../components/productSection/index';
import { Container, ProductContainer } from './styles';

const Main = () => {
    return (
        <Container>
            <ProductContainer>
                <ProductSection />
            </ProductContainer>
        </Container>
    );
};

export default Main;
