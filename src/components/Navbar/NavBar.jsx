import { useState, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoadingScreen from '../../Pages/LoadingScreen';
import MenuNav from './components/MenuNav/MenuNav';
import MenuCart from './components/Menucart/MenuCart';
import BtnCart from './components/BtnCart';
import useScreenSizeShow from './hooks/useScreenSizeShow';
import useCloseMenuLocationChange from './hooks/useCloseMenuLocationChange';
import useCloseMenuNotClick from './hooks/useCloseMenuNotClick';
import useScrollToTop from './hooks/useScrollToTop';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const navBarRef = useCloseMenuNotClick(setShowMenu, setShowCart);

    useScreenSizeShow(setShowMenu);
    useCloseMenuLocationChange(setShowMenu);
    useScrollToTop();

    function handleClickMenu() {
        setShowMenu((prev) => !prev);
        if (showCart) {
            setShowCart((prev) => !prev);
        }
    }

    function handleClickCart() {
        setShowCart((prev) => !prev);
        if (showMenu) {
            setShowMenu((prev) => !prev);
        }
    }

    const menuActive = showMenu ? 'text-blue-400' : 'text-black';

    return (
        <>
            <header ref={navBarRef} className='fixed w-full top-0 bg-white z-20 h-18'>
                <nav className='navbar'>
                    <button
                        className={`md:hidden btn-navBar ml-3 ${menuActive}`}
                        onClick={handleClickMenu}
                        aria-label='display menu'
                    >
                        <i className='bx bx-menu float-none inline text-3xl'></i>
                    </button>
                    <Link to='/home'>
                        <img
                        alt='Logo'
                        src='/Logo.png'
                        className='mt-2 lg:ml-4 p-2 h-14 lg:h-16'
                        />
                    </Link>
                    <BtnCart showCart={showCart} handleClickCart={handleClickCart} />
                </nav>
                <MenuNav showMenu={showMenu} navBarRef={navBarRef} />
                <MenuCart showCart={showCart} hiddenCart={handleClickCart} />
            </header>

            <Suspense fallback={<LoadingScreen />}>
                <Outlet />
            </Suspense>
        </>
    );
}
