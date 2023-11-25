import { PropTypes } from 'prop-types';

function DescriptionItem({description}) {
    return (
        <div className='border-t border-b border-gray-400 my-4 py-6 lg:mb-0 lg:pb-0 lg:mx-4'>
            <h2 className='mb-4 mt-1 text-xl font-medium md:pl-4'> About this item </h2>
            <p className='text-gray-600 text-justify 2xl:text-xl md:p-4'>{description}</p>
        </div>
    );
}

DescriptionItem.propTypes = {
    description: PropTypes.string.isRequired
}

export default DescriptionItem;
