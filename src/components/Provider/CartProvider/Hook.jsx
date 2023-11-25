import { useContext } from 'react';
import {
    CartContext,
    AddCartContext,
    RemoveCartContext,
    TotalPriceCartContext,
    SetNumberItemCartContext
} from './CartProvider';

export function useCart() {
    return useContext(CartContext);
}

export function useAddItemCart() {
    return useContext(AddCartContext);
}

export function useRemoveItemCart() {
    return useContext(RemoveCartContext);
}

export function useTotalPriceCart() {
    return useContext(TotalPriceCartContext);
}

export function useSetNumberItem() {
    return useContext(SetNumberItemCartContext);
}
