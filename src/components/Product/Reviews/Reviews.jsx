import PropTypes from 'prop-types';
import RatingStars from '../RatingStars';
import CardReview from './CardReview';

function Reviews({ title, rate }) {
    return (
        <section className='mx-4 mt-16 md:mt-20'>
            <article>
                <h1 className='font-extrabold uppercase font-logo text-xl md:text-4xl'>Reviews</h1>
                <RatingStars rate={rate} />
                <p className='md:text-lg'>66% of customers recommend this product</p>
                <p className='md:text-lg mt-4 text-blue-700'>3 Reviews</p>
            </article>

            <article className='border-t-2 my-4 pt-4 md:my-16 md:pt-16'>
                <h2 className='font-bold uppercase font-logo text-lg md:text-3xl'>Most recent Review</h2>
                <div className='flex flex-col gap-10 md:flex-row md:text-lg'>
                    <CardReview
                        className={'basis-full'}
                        name={'Claire'}
                        reviewTitle={'The Price Reflect The Value'}
                    >
                        {`I love this new way to do things with my new ${title}. I totally recommend it!`}
                    </CardReview>
                    <CardReview
                        className={'basis-full'}
                        name={'Christophe'}
                        reviewTitle={'Good and Cheap'}
                    >
                        {`The product exactly what i was looking for and it's really cheap the the value that ${title} have. I will by another for my wife !`}
                    </CardReview>
                    <CardReview
                        className={'basis-full'}
                        name={'Scott'}
                        reviewTitle={'Great Overall'}
                    >
                        {`I've been using this product for 2 months and I have no issues with anything. Feels great to use it and the quality is also great. ${title} is a good investisment if you ask me.`}
                    </CardReview>
                </div>
            </article>
        </section>
    );
}

Reviews.propTypes = {
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
};

export default Reviews;
