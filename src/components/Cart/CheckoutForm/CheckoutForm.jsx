import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCart } from '../../Provider/CartProvider/Hook';
import { useState } from 'react';
import CheckoutBtn from './components/CheckoutBtn';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CheckoutForm() {
    const [loading, setLoading] = useState(false);
    const itemCart = useCart();

    const MyStyle = {
        input: 'flex flex-col gap-1 lg:text-lg',
        error: 'text-xs text-red-500 mt-2 italic'
    };
    const validationSchema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z
            .string()
            .min(1, { message: 'Email is required' })
            .email({ message: 'Must be a valid Email' }),
        country: z.string().min(1, { message: 'Country is required' }),
        address: z.string().min(1, { message: 'Address is required' }),
        terms: z.literal(true, {
            errorMap: () => ({ message: 'You must accept Terms and Conditions' })
        })
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        setLoading(true);
        await axios
            .post(`${import.meta.env.VITE_SERVER_URL}/create-checkout-session`, {
                items: itemCart,
                ...data
            })
            .then((res) => {
                if (res.statusText == 'OK') return JSON.parse(res.request.response);
                return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
                setLoading(false);
                window.location = url;
            })
            .catch((e) => {
                console.error(e.message);
                setLoading(false)
            });
    };

    return (
        <>
            <h2 className='text-xl lg:text-3xl font-subFont'>Form</h2>
            <form
                className='flex flex-col gap-2 justify-center items-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={MyStyle.input}>
                    <label htmlFor='name'> Name </label>
                    <input
                        className='border border-gray hover:border-black transition-all ease-out 1s rounded p-2'
                        type='name'
                        {...register('name')}
                    />
                    {errors.name && <p className={MyStyle.error}>{errors.name.message}</p>}
                </div>

                <div className={MyStyle.input}>
                    <label htmlFor='email'> Email </label>
                    <input
                        className='border border-gray hover:border-black transition-all ease-out 1s rounded p-2'
                        type='email'
                        {...register('email')}
                    />
                    {errors.email && <p className={MyStyle.error}>{errors.email.message}</p>}
                </div>
                <div className={MyStyle.input}>
                    <label htmlFor='country'> Country </label>
                    <input
                        className='border border-gray hover:border-black transition-all ease-out 1s rounded p-2'
                        type='text'
                        {...register('country')}
                    />
                    {errors.country && <p className={MyStyle.error}>{errors.country.message}</p>}
                </div>
                <div className={MyStyle.input}>
                    <label htmlFor='address'> Address </label>
                    <input
                        className='border border-gray hover:border-black transition-all ease-out 1s rounded p-2'
                        type='text'
                        {...register('address')}
                    />

                    {errors.address && <p className={MyStyle.error}>{errors.address.message}</p>}
                </div>
                <div>
                    <input type='checkbox' {...register('terms')} />
                    <label htmlFor='terms'>
                        {' '}
                        Accept{' '}
                        <Link to={'/terms-and-conditions'} className='underline text-blue-500'>
                            Terms & Conditions
                        </Link>
                    </label>
                    {errors.terms && <p className={MyStyle.error}>{errors.terms.message}</p>}
                </div>
                <CheckoutBtn loading={loading} noItemsCart={itemCart.length === 0} />
            </form>
        </>
    );
}

export default CheckoutForm;
