import { PropTypes } from 'prop-types';
import { useLayoutEffect, useMemo, useRef, useState, useEffect, useCallback } from 'react';

function Carousel({ children }) {
    const containerRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const [current, setCurrent] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const slides = useMemo(() => {
        if (children.length > 1) {
            let items = children.map((child, index) => (
                <li key={index * 8 + 2} className='slideCarousel'>
                    {child}
                </li>
            ));

            return [
                <li key={children.length + 1} className='slideCarousel'>
                    {children[children.length - 1]}
                </li>,
                ...items,
                <li key={children.length + 2} className='slideCarousel'>
                    {children[0]}
                </li>
            ];
        }

        return <li className='slideCarousel'> children[0] </li>;
    }, [children]);

    const clickHandlerPrevBtn = useCallback(() => {
        containerRef.current.style.transitionDuration = '400ms';
        nextBtnRef.current.disabled = true;
        prevBtnRef.current.disabled = true;
        if (current <= 1) {
            setTranslateX(0);
            setCurrent(children.length);
        } else {
            setTranslateX(containerRef.current.clientWidth * (current - 1));
            setCurrent((prev) => prev - 1);
        }
    }, [children, current]);

    const clickHandlerNextBtn = useCallback(() => {
        containerRef.current.style.transitionDuration = '400ms';
        nextBtnRef.current.disabled = true;
        prevBtnRef.current.disabled = true;
        if (current >= children.length) {
            setTranslateX(containerRef.current.clientWidth * (children.length + 1));
            setCurrent(1);
        } else {
            setTranslateX(containerRef.current.clientWidth * (current + 1));
            setCurrent((prev) => prev + 1);
        }
    }, [children, current]);

    // smooth scroll
    useLayoutEffect(() => {
        const transitionEnd = () => {
            if (current <= 1) {
                containerRef.current.style.transitionDuration = '0ms';
                setTranslateX(containerRef.current.clientWidth);
            }

            if (current >= children.length) {
                containerRef.current.style.transitionDuration = '0ms';
                setTranslateX(containerRef.current.clientWidth * children.length);
            }
            nextBtnRef.current.disabled = false;
            prevBtnRef.current.disabled = false;
        };

        document.addEventListener('transitionend', transitionEnd);

        return () => {
            document.removeEventListener('transitionend', transitionEnd);
        };
    }, [current, children]);

    // autoslide
    useEffect(() => {
        const interval = setInterval(() => {
            clickHandlerNextBtn();
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [clickHandlerNextBtn]);

    return (
        <section className='relative overflow-hidden mt-7'>
            <ul
                ref={containerRef}
                className='list-none flex items-center max-w-7xl h-40 md:h-80'
                style={{
                    transform: `translate3d(-${translateX}px, 0, 0)`,
                    transitionDuration: '400ms'
                }}
            >
                {slides}
            </ul>
            <button
                ref={prevBtnRef}
                className='absolute top-1/2 left-2 -translate-y-1/2 bg-gray-400 rounded-3xl w-10 bg-opacity-70 text-4xl border-0 cursor-pointer z-10'
                onClick={clickHandlerPrevBtn}
                aria-label='go previous button image caroussel'
            >
                <i className='bx bxs-chevron-left'></i>
            </button>
            <button
                ref={nextBtnRef}
                className='absolute top-1/2 right-2 -translate-y-1/2 bg-gray-400 rounded-3xl w-10 bg-opacity-70 text-4xl border-0 cursor-pointer z-10'
                onClick={clickHandlerNextBtn}
                aria-label='go next button image caroussel'
            >
                <i className='bx bxs-chevron-right'></i>
            </button>
        </section>
    );
}

Carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default Carousel;
