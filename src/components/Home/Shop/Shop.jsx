import { useReducer } from 'react';
import { useItems } from '../../Provider/ItemsProvider/Hook';
import Card from './components/Card';
import FilterShop from './components/FilterShop';
import { ACTION } from './components/Action';

function reducerFilterShop(state, action) {
    switch (action.filterType) {
        case ACTION.ALL:
            return action.Items;
        case ACTION.WOMEN:
            return action.Items.filter((item) => {
                return item.category === ACTION.WOMEN;
            });
        case ACTION.MEN:
            return action.Items.filter((item) => {
                return item.category === ACTION.MEN;
            });
        case ACTION.JEWELERY:
            return action.Items.filter((item) => {
                return item.category === ACTION.JEWELERY;
            });
        case ACTION.ELECTRONICS:
            return action.Items.filter((item) => {
                return item.category === ACTION.ELECTRONICS;
            });
        default:
            return state;
    }
}

export default function Shop() {
    const [itemsDisplay, dispatch] = useReducer(reducerFilterShop, useItems());

    return (
        <section className='max-w-full flex flex-col md:flex-row'>
            <FilterShop filterFunction={dispatch} />
            <div
                className='grid grid-cols-2 gap-y-2 w-full
                xl:grid-cols-3 md:border-l md:border-black md:mt-2'
            >
                {itemsDisplay.map((item) => {
                    return <Card key={item.id} item={item} />;
                })}
            </div>
        </section>
    );
}
