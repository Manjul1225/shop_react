import { lazy } from 'react';
import './styles/output.css';
import { Routes, Route } from 'react-router-dom';
import ItemsProvider from './components/Provider/ItemsProvider/ItemsProvider';
import CartProvider from './components/Provider/CartProvider/CartProvider';
import NavBar from './components/Navbar/NavBar';
import Cart from './Pages/Cart';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const NoPage = lazy(() => import('./Pages/NoPage'));
const Contact = lazy(() => import('./Pages/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Product = lazy(() => import('./Pages/Product'));
const IntellectualProperty = lazy(() => import('./Pages/IntellectualProperty'));
const TermsAndConditions = lazy(() => import('./Pages/TermsAndConditions'));

function App() {
    return (
        <ItemsProvider>
            <CartProvider>
                <Routes>
                    <Route path='/' element={<NavBar />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/home/cart' element={<Cart />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='intellectual-property' element={<IntellectualProperty />} />
                        <Route path='terms-and-conditions' element={<TermsAndConditions />} />
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
                <Footer />
            </CartProvider>
        </ItemsProvider>
    );
}

export default App;
