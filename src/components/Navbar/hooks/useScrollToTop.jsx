import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);
}

export default useScrollToTop;
