import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import Logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="shoeStore sapato" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>5 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    );
}

export default Header;
