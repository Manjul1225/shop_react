import { useRef, useEffect } from "react";

function useCloseMenuNotClick(setShowMenu, setShowCart) {
    const navBarRef = useRef(null);

    /* Effect use to close menu if the use click outside of it */
    useEffect(() => {
        function handleClickOutsideNavBar(event) {
            if (navBarRef.current && !navBarRef.current.contains(event.target)) {
                setShowMenu(false);
                setShowCart(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutsideNavBar);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideNavBar);
        };
    }, [navBarRef, setShowMenu, setShowCart]);

    return navBarRef;
}

export default useCloseMenuNotClick;