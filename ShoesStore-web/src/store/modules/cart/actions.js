export function addToCartRequest(id) {
    return {
        type: 'ADD_REQUEST',
        id,
    };
}

export function addToCartSucess(product) {
    return {
        type: 'ADD_SUCESS',
        product,
    };
}

export function removeToCart(id) {
    return {
        type: 'REMOVE_FROM_CART',
        id,
    };
}

export function updateAmountRequest(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        id,
        amount,
    };
}

export function updateAmountSucess(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNTADD_SUCESS',
        id,
        amount,
    };
}
