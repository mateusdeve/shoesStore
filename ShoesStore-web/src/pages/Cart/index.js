/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';
import {
    MdDelete,
    MdRemoveCircleOutline,
    MdAddCircleOutline,
} from 'react-icons/md';
import { Container, ProducTable, Total } from './styles';
import {
    removeToCart,
    updateAmountRequest,
} from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ total, cart, dispatch }) {
    function increment(product) {
        dispatch(updateAmountRequest(product.id, product.amount + 1));
    }
    function decrement(product) {
        dispatch(updateAmountRequest(product.id, product.amount - 1));
    }

    return (
        <Container>
            <ProducTable>
                <thead>
                    <tr>
                        <th aria-label="espaço em branco" />
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>SUBTOTAL</th>
                        <th aria-label="espaço em branco" />
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={String(product.id)}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormated}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            color="#141419"
                                            size={20}
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            color="#141419"
                                            size={20}
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R${product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(removeToCart(product.id))
                                    }
                                >
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
                    <strong>{formatPrice(total)} </strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart.map((product) => ({
        ...product,
        subtotal: formatPrice(product.amount * product.price),
    })),
    total: state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0),
});

export default connect(mapStateToProps)(Cart);
