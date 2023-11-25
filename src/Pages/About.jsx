import { Link } from 'react-router-dom';
import { Accordion } from '../components/About/Accordion';

export default function About() {
    return (
        <section className='pt-28 flex flex-col justify-center bg-gray-100'>
            <div className='bg-blue-300 w-screen p-24'>
                <h1 className='font-subFont text-center text-7xl'>About Us</h1>
            </div>
            <div className='px-10 flex flex-col items-center gap-7 ml-2 '>
                <div className='flex flex-col justify-center content-center items-center w-full lg:w-[70%]'>
                    <h2 className='text-3xl mb-14 mt-4 text-center lg:text-4xl'>
                        We are the Reactshop!
                    </h2>

                    <div className='flex flex-col gap-7 w-full text-lg'>
                        <div className='flex flex-col items-end justify-between w-full'>
                            <h2 className='title-aboutUs'> Our goal: </h2>
                            <p className='text-aboutUs'>
                                Our mission is to sell you what you really need at a fair cost. We
                                take pride in offering you a wide range of high-quality products,
                                including Men&apos;s and Women&apos;s Clothing, Jewelery and
                                Electronics item.
                            </p>
                        </div>
                        <div>
                            <h2 className='title-aboutUs'>Our story :</h2>
                            <p className='text-aboutUs'>
                                Our company was born out of an ideal futur for all the customer.
                                Since then, we&apos;ve evolved to become a major player in the
                                industry, consistently focusing on our core values of sincerity,
                                fair cost for everyone and the best services that we can provide.
                            </p>
                        </div>
                        <div className='flex flex-col items-end justify-between '>
                            <h2 className='title-aboutUs'> Our values :</h2>
                            <p className='text-aboutUs'>
                                At Reactshop, we believe in sincerity, sharing, communication. Our
                                dedicated team works tirelessly to provide our customers with an
                                exceptional shopping experience. Our commitment to quality,
                                sustainability, and rapidity is at the heart of everything we do. We
                                set ourselves apart by our values and our products.
                            </p>
                        </div>
                        <div>
                            <h2 className='title-aboutUs'> Thank you: </h2>
                            <p className='text-aboutUs'>
                                At Reactshop, we are determined to give you the best experience
                                imaginable and to create an unforgettable experience. We are excited
                                to have you with us and to assist you with your online shopping.
                                Stay tuned for our future projects as we continue to innovate and
                                evolve to better serve you. Thank you for trusting us and being part
                                of our community.
                            </p>
                        </div>
                    </div>

                    <h2 className='font-aboutTitle text-2xl underline mb-4 mt-8'>
                        {' '}
                        - The Reactshop Team
                    </h2>
                    <Link className='btn-addToCart text-2xl' to='/contact'>
                        {' '}
                        Contact Us{' '}
                    </Link>
                </div>

                <hr className='border-b border-black w-[70%] m-auto h-[1px]' />

                <div className='flex flex-col mb-10 gap-5'>
                    <Accordion
                        title='Development notice'
                        classTitle={'text-lg lg:text-xl py-2'}
                        classContainer={'bg-gray-300'}
                    >
                        <div className='text-lg lg:text-xl flex flex-col gap-3 justify-center md:h-full'>
                            <p>
                                The ReactShop is a project made by{' '}
                                <a
                                    className='text-blue-500 underline hover:text-purple-500'
                                    href='https://github.com/LeeBingler'
                                >
                                    Bingler Lee
                                </a>
                                . This Web App is made with Tailwind and React.js, in order to test
                                the App I use vitest.
                            </p>
                            <p>
                                This project was made to prove my skill in API data fetch, my
                                capacity to build a functional web app with react and my skill with
                                TailwindCSS. The API data fetch is made with axios, I just fetch the
                                data one time in the first render of the App then i use the data as
                                i want in the App.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion
                        title='Source Code'
                        classTitle={'text-lg lg:text-xl py-2'}
                        classContainer={'bg-gray-300'}
                    >
                        <div className='text-center text-lg lg:text-xl flex flex-col gap-3 justify-center md:h-full'>
                            <a
                                className='text-blue-500 underline hover:text-purple-500 lg:text-lg '
                                href='https://github.com/LeeBingler/Reactshop'
                            >
                                Reactshop
                            </a>
                            <p>
                                ReactShop is an impressive e-commerce website built with React.JS
                                and Tailwind. It allows users to browse through various products and
                                make purchases. The project&apos;s code is licensed under the MIT
                                License, providing flexibility for usage and distribution.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion
                        title='Documentation librairie and framework used'
                        classTitle={'text-lg lg:text-xl py-2'}
                        classContainer={'bg-gray-300'}
                    >
                        <ul className='lg:text-lg h-full text-center flex flex-col gap-5 justify-center'>
                            <li>
                                <p>
                                    -{' '}
                                    <a
                                        className='text-blue-500 underline hover:text-purple-500'
                                        href='https://tailwindcss.com/'
                                    >
                                        Tailwind
                                    </a>{' '}
                                    : A utility-first CSS framework that streamlines styling and
                                    allows for the creation of clean and responsive designs.
                                </p>
                            </li>
                            <li>
                                <p>
                                    -{' '}
                                    <a
                                        className='text-blue-500 underline hover:text-purple-500'
                                        href='https://react.dev/'
                                    >
                                        React.js
                                    </a>{' '}
                                    : A popular JavaScript library for building user interfaces,
                                    enabling fast and dynamic updates to the website.
                                </p>
                            </li>
                            <li>
                                <p>
                                    -{' '}
                                    <a
                                        className='text-blue-500 underline hover:text-purple-500'
                                        href='https://vitest.dev/'
                                    >
                                        Vitest
                                    </a>{' '}
                                    : Vitest is a next generation testing framework powered by Vite
                                    and which enables a simple test setup and management experience.
                                </p>
                            </li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
