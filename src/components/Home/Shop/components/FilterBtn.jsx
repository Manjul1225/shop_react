import PropTypes from 'prop-types';

function FilterBtn({ children, onClick, number, whichIsActive }) {
    return (
        <button
            aria-label={`filter button ${children}`}
            className={`basis-full whitespace-nowrap ${whichIsActive === number ? 'filter-active' : 'btn-filter'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

FilterBtn.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    number: PropTypes.number,
    whichIsActive: PropTypes.number,
}

export default FilterBtn;
