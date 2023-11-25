import RatingStars from '../RatingStars';
import PropTypes from 'prop-types';

function CardReview({ children, name, reviewTitle, className }) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className={`${className || ''} max-w-xl`}>
            <h3 className='underline'>{name}</h3>
            <div className='flex justify-between'>
                <RatingStars rate={getRandomInt(4, 6)} />
                <p className='text-gray-500'> 2 days ago</p>
            </div>
            <div>
                <h4 className='font-bold'>{reviewTitle}</h4>
                <p> {children} </p>
            </div>
        </div>
    );
}

CardReview.propTypes = {
    children: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    reviewTitle: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default CardReview;
