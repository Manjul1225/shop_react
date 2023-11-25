import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useCloseMenuLocationChange(setShowMenu) {
    const location = useLocation();

    /* Effect to know when the URL change and to close the menunavbar */
    useEffect(() => {
        setShowMenu(false);
    }, [location, setShowMenu]);
}

export default useCloseMenuLocationChange;