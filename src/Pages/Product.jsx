import { useParams } from 'react-router-dom';
import { useGetItemById, useItems } from '../components/Provider/ItemsProvider/Hook';
import LoadingScreen from './LoadingScreen';
import CTAsection from '../components/Product/CTAsection';
import DescriptionItem from '../components/Product/DescriptionItem';
import RatingItem from '../components/Product/RatingItem';
import Reviews from '../components/Product/Reviews/Reviews';

export default function Product() {
    const idProduct = Number(useParams().id);
    const getItemId = useGetItemById();
    const item = getItemId(idProduct)[0];

    if (useItems().length === 0) return <LoadingScreen />;

    return (
        <>
            <section className='px-2 mt-28 flex flex-col items-center lg:flex-row lg:justify-around lg:items-start lg:mt-40 lg:px-14 w-full'>
                <article className='flex flex-col justify-center items-center border p-10 w-4/5 max-w-sm xl:max-w-lg'>
                    <img className='h-min max-h-full' src={item.image} alt={item.title} />
                </article>

                <article className='w-4/5 my-4 max-w-3xl lg:mb-0 lg:mt-0 lg:ml-5'>
                    <h2 className='py-5 font-medium text-2xl lg:text-2xl lg:mx-4 lg:pt-0'>
                        {item.title}
                    </h2>
                    <RatingItem rating={item.rating} />
                    <DescriptionItem description={item.description} />
                </article>

                <article className='flex flex-col w-4/5 justify-center items-center'>
                    <CTAsection item={item} />
                </article>
            </section>

            <Reviews rate={item.rating.rate} title={item.title} />
        </>
    );
}
