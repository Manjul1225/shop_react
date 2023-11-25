import { ACTION } from './Action';
import { useItems } from '../../../Provider/ItemsProvider/Hook';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import FilterBtn from './FilterBtn';

function FilterShop({ filterFunction }) {
    const [whichIsActive, setWhichIsActive] = useState(0);
    const AllItems = useItems();

    return (
        <aside
            className='flex w-full justify-center border-black bg-white border-b border-t mt-4 py-2 sticky top-[4.6rem] z-10
                md:border-0 md:mt-0 md:h-16 md:w-1/2 md:flex-wrap md:justify-normal md:pr-4 md:top-20 md:max-w-xs
                lg:w-1/2'
        >
            <FilterBtn
                onClick={() => {
                    filterFunction({ filterType: ACTION.ALL, Items: AllItems });
                    if (whichIsActive != 0) setWhichIsActive(0);
                }}
                number={0}
                whichIsActive={whichIsActive}
            >
                All
            </FilterBtn>
            <FilterBtn
                onClick={() => {
                    filterFunction({ filterType: ACTION.WOMEN, Items: AllItems });
                    if (whichIsActive != 1) setWhichIsActive(1);
                }}
                number={1}
                whichIsActive={whichIsActive}
            >
                Women&apos;s Clothing
            </FilterBtn>
            <FilterBtn
                onClick={() => {
                    filterFunction({ filterType: ACTION.MEN, Items: AllItems });
                    if (whichIsActive != 2) setWhichIsActive(2);
                }}
                number={2}
                whichIsActive={whichIsActive}
            >
                Men&apos;s Clothing
            </FilterBtn>
            <FilterBtn
                onClick={() => {
                    filterFunction({ filterType: ACTION.JEWELERY, Items: AllItems });
                    if (whichIsActive != 3) setWhichIsActive(3);
                }}
                number={3}
                whichIsActive={whichIsActive}
            >
                Jewelery
            </FilterBtn>
            <FilterBtn
                onClick={() => {
                    filterFunction({ filterType: ACTION.ELECTRONICS, Items: AllItems });
                    if (whichIsActive != 4) setWhichIsActive(4);
                }}
                number={4}
                whichIsActive={whichIsActive}
            >
                Electronics
            </FilterBtn>
        </aside>
    );
}

FilterShop.propTypes = {
    filterFunction: PropTypes.func.isRequired
};

export default FilterShop;
