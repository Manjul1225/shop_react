import { useState } from 'react';
import PropTypes from 'prop-types';

function Accordion({ children, title, classTitle, classContainer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-[90vw]'>
            <input id='expandCollapse' type='checkbox' checked={open} className='peer sr-only' />
            <label
                htmlFor='expandCollapse'
                className={`${
                    classTitle || ''
                } w-full flex justify-center items-center bg-blue-100 text-center px-2`}
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <i className='bx bx-chevron-up'></i>
                ) : (
                    <i className='bx bx-chevron-down'></i>
                )}
                {title}
            </label>
            <div
                className={`${
                    classContainer || ''
                } h-0 px-5 lg:px-10 peer-checked:p-5 peer-checked:h-[300px] lg:peer-checked:p-10 transition-all overflow-scroll`}
            >
                {children}
            </div>
        </div>
    );
}

Accordion.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    classTitle: PropTypes.string.isRequired,
    classContainer: PropTypes.string.isRequired,
};

export { Accordion };
