import { useState } from 'react';
import { useAddItemCart } from '../Provider/CartProvider/Hook';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function CTAsection({ item }) {
    const [numberOfItemToAdd, setnumberOfItemToAdd] = useState(1);
    const navigate = useNavigate();
    const onClickHandler = useAddItemCart();

    function handleOnClickBtnPlus() {
        setnumberOfItemToAdd((prev) => {
            if (prev < 10) {
                return prev + 1;
            }
            return prev;
        });
    }

    function handleOnClickBtnMinus() {
        setnumberOfItemToAdd((prev) => {
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    }
    return (
        <div className='flex flex-col gap-3 border-black border rounded py-4 px-8 mb-10 w-full max-w-lg lg:pl-5 lg:py-8'>
            <div className='flex flex-col gap-3 items-center'>
                <p className='text-xl md:text-2xl lg:text-3xl'>
                    Price : <span className='text-blue-900'> ${item.price} </span>
                </p>
                <div className='flex w-1/2 justify-between content-center items-center'>
                    <button
                        className='text-4xl border rounded border-black pb-1 px-4 align-middle text-center  hover:bg-gray-200  transition-all 0.5s'
                        onClick={handleOnClickBtnMinus}
                    >
                        -
                    </button>
                    <p className='text-2xl'> {numberOfItemToAdd} </p>
                    <button
                        className='text-4xl border rounded border-black pb-1 px-3 align-middle text-center  hover:bg-gray-200  transition-all 0.5s'
                        onClick={handleOnClickBtnPlus}
                    >
                        +
                    </button>
                </div>
            </div>

            <button
                aria-label='add this item to your cart'
                className='btn-addToCart'
                onClick={() => {
                    onClickHandler(item, item.number + numberOfItemToAdd);
                }}
            >
                Add to Cart
            </button>
            <button
                className='bg-blue-900 rounded-md px-4 py-1 mt-2 text-white hover:bg-blue-950'
                onClick={() => {
                    onClickHandler(item, item.number + 1);
                    navigate('/home/cart');
                }}
            >
                Buy Now
            </button>
            <div className='flex py-2 items-center gap-2'>
                <i className='bx bxs-lock-alt'></i>
                <p className='text-blue-700'> Secure transaction </p>
            </div>
            <div className='text-gray-800 text-sm'>
                <div className='flex justify-between'>
                    <p> Ships from </p>
                    <p> Reactshop.com </p>
                </div>
                <div className='flex justify-between'>
                    <p> Sold by </p>
                    <p> Reactshop.com </p>
                </div>
            </div>
        </div>
    );
}

CTAsection.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.any.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired
    })
}

export default CTAsection;
