import { useState, useEffect } from 'react';

function useScreenSizeShow(setShowMenu) {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    /* Effect to know when the resize as occur */
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        if (screenSize.width > 768) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize, setShowMenu]);
}

export default useScreenSizeShow;