/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    MdDelete,
    MdRemoveCircleOutline,
    MdAddCircleOutline,
} from 'react-icons/md';
import { Container, ProducTable, Total } from './styles';

class Cart extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.setState({ products: this.props.cart });
    }

    render() {
        const { products } = this.state;

        return (
            <Container>
                <ProducTable>
                    <thead>
                        <tr>
                            <th />
                            <th>PRODUTO</th>
                            <th>QUANTIDADE</th>
                            <th>SUBTOTAL</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </td>
                                <td>
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormated}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button">
                                            <MdRemoveCircleOutline
                                                color="#141419"
                                                size={20}
                                            />
                                        </button>
                                        <input
                                            type="number"
                                            readOnly
                                            value={2}
                                        />
                                        <button type="button">
                                            <MdAddCircleOutline
                                                color="#141419"
                                                size={20}
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>R$ 258,80</strong>
                                </td>
                                <td>
                                    <button type="button">
                                        <MdDelete color="#141419" size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProducTable>

                <footer>
                    <button type="button">Finalizar Pedido</button>

                    <Total>
                        <span>Total</span>
                        <strong>R$ 129,90</strong>
                    </Total>
                </footer>
            </Container>
        );
    }
}
export default connect((state) => ({
    cart: state.cart,
}))(Cart);
