import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';
import {
    addToCartSucess,
    updateAmountRequest,
    updateAmountSucess,
} from './actions';

function* addToCart({ id }) {
    const productExists = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Não temos mais deste produto no estoque :(');
        return;
    }

    if (productExists) {
        yield put(updateAmountRequest(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormated: formatPrice(response.data.price),
        };

        yield put(addToCartSucess(data));
    }
}

function* updateAmount({ id, amount }) {
    if (amount < 0) return;

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Não temos mais deste produto no estoque :(');
        return;
    }
    yield put(updateAmountSucess(id, amount));
}

export default all([
    takeLatest('ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
