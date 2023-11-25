import { PropTypes } from 'prop-types';
import { useAddItemCart, useRemoveItemCart, useSetNumberItem } from '../Provider/CartProvider/Hook';
import BtnCartCard from './BtnCartCard';
import { useState } from 'react';
function CartCard({ item }) {
    const [numberItem, setNumberItem] = useState(item.number);
    const handleClickRemove = useRemoveItemCart();
    const handleClickAdd = useAddItemCart();
    const handleChangeNumber = useSetNumberItem();

    function handleOnChange(e) {
        if (e.target.value != '' && !isNaN(e.target.value)) {
            handleChangeNumber(item, Number(e.target.value));
        }

        if (e.target.value != '' && isNaN(e.target.value)) {
            setNumberItem(item.number);
        } else {
            setNumberItem(e.target.value);
        }
    }

    return (
        <div className='mt-10 lg:mt-14 flex flex-row h-[200px] justify-around w-full'>
            <div className='w-[30%] flex justify-center items-center pr-8'>
                <img className='h-min max-h-full' src={item.image} alt={item.title} />
            </div>

            <div className='flex flex-col w-[70%] max-w-4xl'>
                <div className='flex justify-between'>
                    <h1 className='font-medium mr-2 text-base lg:text-2xl h-[72px] overflow-hidden'>
                        {item.title}
                    </h1>
                    <p className='font-bold text-lg lg:text-xl ml-3'> ${item.price} </p>
                </div>
                <p className='text-blue-400 mt-2'> In stock </p>

                <div className='mt-4 flex justify-between'>
                    <div className='flex items-center text-lg lg:gap-3 lg:text-xl'>
                        <BtnCartCard
                            ariaLabel={'remove one item cart'}
                            onClick={() => {
                                handleClickRemove(item, numberItem - 1);
                                setNumberItem(prev => prev - 1);
                            }}
                        >
                            -
                        </BtnCartCard>
                        <input
                            className='text-center mx-4 w-12 h-full text-ellipsis whitespace-nowrap border rounded hover:border-gray-400'
                            type='text'
                            maxLength={3}
                            value={numberItem}
                            onChange={handleOnChange}
                        />
                        <BtnCartCard
                            ariaLabel={'add one item'}
                            onClick={() => {
                                handleClickAdd(item, numberItem + 1);
                                setNumberItem(prev => prev + 1);
                            }}
                        >
                            +
                        </BtnCartCard>
                    </div>

                    <button
                        aria-label='remove all items'
                        onClick={() => {
                            handleClickRemove(item, 0);
                            setNumberItem(0);
                        }}
                    >
                        <i className='bx bxs-trash-alt hover:text-blue-400 text-2xl lg:text-4xl'></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

CartCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.any.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired
    })
};

export default CartCard;
