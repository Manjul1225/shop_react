import { useCart, useTotalPriceCart } from '../components/Provider/CartProvider/Hook';
import CartCard from '../components/Cart/CartCard';
import GoBackBtn from '../components/GoBackBtn';
import CheckoutForm from '../components/Cart/CheckoutForm/CheckoutForm';

export default function Cart() {
    const ItemCart = useCart();
    const totalPrice = useTotalPriceCart();
    const nbItem = () => {
        let nb = 0;

        ItemCart.forEach((element) => {
            nb += element.number;
        });

        return nb;
    };

    return (
        <section className='flex flex-col items-center justify-center px-5 pt-28 pb-7 bg-gray-200 lg:pt-32 lg:pb-20  lg:flex-row lg:justify-around lg:min-h-[60vh] lg:items-start'>
            <div className='bg-white w-full max-w-3xl lg:min-w-[700px] lg:max-w-6xl'>
                <h1 className='font-subFont text-6xl ml-4 mt-4'> Your cart </h1>
                <hr className='mx-14 mt-10' />
                <div className='flex flex-col items-center px-4'>
                    {ItemCart.length != 0 ? (
                        ItemCart.map((item) => <CartCard key={item.id * 184821} item={item} />)
                    ) : (
                        <h1 className='text-3xl pt-8'> No item in your cart</h1>
                    )}
                </div>
                <hr className='mx-24 my-10' />
                <p className='text-right text-2xl mb-5 pr-4'>
                    Total ({nbItem()} {nbItem() > 1 ? 'articles' : 'article'}): {totalPrice}$
                </p>
            </div>

            <div className='flex flex-col items-center justify-center bg-white p-4 m-10 h-fit gap-2 min-w-[310px] lg:max-w-md lg:w-full lg:sticky lg:top-28 lg:my-0'>
                <CheckoutForm />
                <p className='text-right text-xl whitespace-nowrap pt-8'>
                    Total ({nbItem()} {nbItem() > 1 ? 'articles' : 'article'}): {totalPrice}$
                </p>
                <GoBackBtn />
            </div>
        </section>
    );
}
