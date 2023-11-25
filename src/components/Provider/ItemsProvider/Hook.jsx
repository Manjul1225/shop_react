import { useContext } from "react";
import { ItemsContext, GetItemByIdContext } from "./ItemsProvider";

export function useItems() {
    return useContext(ItemsContext);
}

export function useGetItemById() {
    return useContext(GetItemByIdContext);
}