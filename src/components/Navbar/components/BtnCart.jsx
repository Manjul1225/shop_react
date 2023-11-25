import { useCart } from '../../Provider/CartProvider/Hook'
import { PropTypes } from 'prop-types';

function BtnCart({ showCart, handleClickCart }) {
    const itemCart = useCart();
    const calcValueToDisplay = () => {
        let value = 0;

        itemCart.forEach((item) => {
            value += item.number;
        });

        if (value > 99)
            return '99+';

        return value.toString();
    }
    const valueDisplay = calcValueToDisplay();

    return (
        <button className={`btn-navBar relative mr-3 md:mr-4 md:mt-3 ${showCart ? 'text-blue-400' : ''}`} onClick={handleClickCart} aria-label='display actual cart'>
            <i className='bx bxs-cart float-none inline text-3xl'></i>
            { valueDisplay != 0 ?
            <div
            className='flex justify-center items-center
            text-xs absolute rounded-[50%] bg-blue-950 text-white w-[20px] h-[20px]
            -top-1 -right-3'
            >
                {valueDisplay}
            </div>
            : ''
            }
        </button>
    )
}

BtnCart.propTypes = {
    showCart: PropTypes.bool,
    handleClickCart: PropTypes.func
}

export default BtnCart