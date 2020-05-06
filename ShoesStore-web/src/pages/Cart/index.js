import React from 'react';
import {
    MdDelete,
    MdRemoveCircleOutline,
    MdAddCircleOutline,
} from 'react-icons/md';
import { Container, ProducTable, Total } from './styles';

export default function Cart() {
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/bnn/l_netshoes/2020-04-23/4108_trio5.jpg"
                                alt="ok"
                            />
                        </td>
                        <td>
                            <strong> Tênis Top d+</strong>
                            <span>R$ 129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        color="#141419"
                                        size={20}
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
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
