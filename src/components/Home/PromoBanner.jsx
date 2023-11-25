import { useState } from 'react';
import PropTypes from 'prop-types';

function PromoBanner({ children, className, classBtn }) {
    const [isOpen, setIsOpen] = useState(true);

    if (isOpen) {
        return (
            <div
                className={
                    className ||
                    'w-[100vw] h-16 flex justify-center items-center bg-black text-white whitespace-nowrap text-[3.4vw] sm:text-base lg:text-xl fixed bottom-0 left-0'
                }
            >
                {children}
                <button
                    className={classBtn || 'py-1 px-2 hover:text-gray-500 md:ml-4'}
                    onClick={() => setIsOpen(false)}
                >
                    X
                </button>
            </div>
        );
    }

    return;
}

PromoBanner.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    classBtn: PropTypes.string
};

export default PromoBanner;
