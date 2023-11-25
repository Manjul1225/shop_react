import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export const CartContext = React.createContext();
export const AddCartContext = React.createContext();
export const RemoveCartContext = React.createContext();
export const TotalPriceCartContext = React.createContext();
export const SetNumberItemCartContext = React.createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function removeItemCart(ItemToRemove, number) {
        setCart((prev) => {
            let newArray = prev.map((item) => {
                if (item.id === ItemToRemove.id && ItemToRemove.number > 0) {
                    item.number = number;
                }
                return item;
            });

            newArray = newArray.filter((item) => item.number > 0);
            return newArray;
        });
    }

    function addItemCart(newItem, number) {
        function checkNewItemInCart(oldCart) {
            const ItemIsIn = oldCart.filter((item) => {
                return item.id === newItem.id;
            });
            return ItemIsIn.length;
        }

        setCart((prev) => {
            if (checkNewItemInCart(prev)) {
                return prev.map((item) => {
                    if (item.id === newItem.id) {
                        item.number = number;
                    }
                    return item;
                });
            }
            newItem.number = number;
            return [...prev, newItem];
        });
    }

    function totalPriceCart() {
        let total = 0;

        cart.forEach((elem) => {
            total += elem.price * elem.number;
        });

        return total.toFixed(2);
    }

    function setNumberItemCart(item, number) {
        if (typeof number != 'number') {
            console.error('number should be type of number not', typeof number);
            return;
        }

        if (number === 0) {
            removeItemCart(item, 0);
            return;
        }

        setCart((prev) => {
            let newArr = Array.from(prev);
            const indexItem = newArr.findIndex((thing) => thing == item);
            newArr[indexItem].number = number;

            return newArr;
        });
    }

    return (
        <CartContext.Provider value={cart}>
            <AddCartContext.Provider value={addItemCart}>
                <RemoveCartContext.Provider value={removeItemCart}>
                    <TotalPriceCartContext.Provider value={totalPriceCart()}>
                        <SetNumberItemCartContext.Provider value={setNumberItemCart}>
                            {children}
                        </SetNumberItemCartContext.Provider>
                    </TotalPriceCartContext.Provider>
                </RemoveCartContext.Provider>
            </AddCartContext.Provider>
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default CartProvider;
