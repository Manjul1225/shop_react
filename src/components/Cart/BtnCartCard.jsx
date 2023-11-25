import { PropTypes } from 'prop-types';

function BtnCartCard({ onClick, children, ariaLabel }) {
    return (
        <button
            aria-label={ariaLabel}
            className='border rounded border-black py-2 px-4 hover:bg-gray-200  transition-all 0.5s'
            onClick={onClick}
        >
            {children}
        </button>
    );
}

BtnCartCard.propTypes = {
    onClick : PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
}

export default BtnCartCard;
