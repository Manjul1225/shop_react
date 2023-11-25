import PropTypes from 'prop-types';
import RatingStars from './RatingStars';

function RatingItem({ rating }) {
    return (
        <div className='flex gap-10'>
            <RatingStars rate={rating.rate} />
            <p className='text-blue-700'>{rating.count} ratings</p>
        </div>
    );
}

RatingItem.propTypes = {
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number
    }).isRequired
};

export default RatingItem;
