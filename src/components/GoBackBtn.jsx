import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function GoBackBtn({ className }) {
    return (
        <>
            <button
                aria-label='go to previous page'
                className={`${className || ''} text-blue-400 px-4 py-1 mt-2 text-xl lg:text-2xl border border-black rounded-md focus:ring-4 transform active:scale-75 transition-transform hover:bg-gray-200`}
            >
                <Link
                    to={-1}
                    onClick={() => {
                        window.scroll(0, 0);
                    }}
                >
                    Go Back
                </Link>
            </button>
        </>
    );
}

GoBackBtn.propTypes = {
    className: PropTypes.string
}

export default GoBackBtn;