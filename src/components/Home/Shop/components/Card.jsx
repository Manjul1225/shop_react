import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useAddItemCart } from '../../../Provider/CartProvider/Hook';

function Card({ item }) {
    const onClickHandler = useAddItemCart();

    return (
        <div className='flex flex-col justify-center relative bg-white border border-black rounded m-4 p-2 py-10'>
            <p className='absolute top-2 md:top-4 text-right w-[91%] font-semibold lg:text-lg'>
                ⭐ {item.rating.rate}
            </p>
            <div className='flex flex-col justify-center items-center'>
                <Link to={`/product/${item.id}`} className='cursor-pointer'>
                    <img
                        className='h-40 mt-1 md:px-2 md:h-52 lg:h-60 lg:px-20'
                        src={item.image}
                        alt={item.title}
                    />
                </Link>
            </div>
            <h1
                className='p-2 overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 text-center
                md:text-xl'
            >
                {item.title}
            </h1>
            <div className='flex flex-col justify-center items-center font-medium md:text-xl'>
                <p>${item.price}</p>
                <div className='flex flex-col gap-2 md:flex-row'>
                    <button
                        aria-label='Add to Cart'
                        className='btn-addToCart'
                        onClick={() => {
                            onClickHandler(item, item.number + 1);
                        }}
                    >
                        Add to Cart
                    </button>
                    <button
                        aria-label='See details'
                        className='px-4 py-1 mt-2 bg-blue-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform
                        hover:bg-blue-950'
                    >
                        <Link to={`/product/${item.id}`}>See details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired
        })
    })
};

export default Card;
