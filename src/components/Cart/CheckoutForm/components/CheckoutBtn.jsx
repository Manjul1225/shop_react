import { PropTypes } from 'prop-types';
import ReactLoading from 'react-loading';

function CheckoutBtn({ loading, noItemsCart }) {
    if (noItemsCart) return;

    return !loading ? (
        <button
            type='submit'
            aria-label='checkout button'
            className='rounded m-2 text-2xl w-[70%] h-12 bg-blue-400 text-white whitespace-nowrap hover:bg-blue-500'
        >
            Checkout
        </button>
    ) : (
        <div className='rounded p-2 m-2 text-2xl w-[70%] h-12 bg-blue-500 flex items-center justify-center'>
            <ReactLoading type='bubbles' color='#FFFFFF' />
        </div>
    );
}

CheckoutBtn.propTypes = {
    loading: PropTypes.bool.isRequired,
    noItemsCart: PropTypes.bool.isRequired
};

export default CheckoutBtn;
