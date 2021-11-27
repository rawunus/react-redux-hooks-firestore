// Items Add from shop and checkout items
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingcartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingcartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Itema remove from cart by quantity
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingcartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // Remove single item
    if (existingcartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // Remove multiple from cart items by quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
