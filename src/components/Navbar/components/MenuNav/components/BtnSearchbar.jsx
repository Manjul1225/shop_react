import { PropTypes } from 'prop-types';
import { useItems } from '../../../../Provider/ItemsProvider/Hook';

function BtnSearchbar({ valueSearchBar }) {
    const ItemsShop = useItems();

    async function getSearchBarItem() {
        await ItemsShop.forEach((item) => {
            if (item.title === valueSearchBar) {
                window.location = `/product/${item.id}`;
            }
        });
    }

    return (
        <button
            className='absolute z-10 w-10 text-2xl p-2 mt-4 h-10 text-gray-500 hover:text-blue-400
            md:left-2 md:m-4 md:text-xl md:p-1 md:mr-1 md:h-10 md:ml-0 md:w-10'
            onClick={getSearchBarItem}
            aria-label='search linl'
        >
            <i className='bx bx-search-alt-2'></i>
        </button>
    );
}

BtnSearchbar.propTypes = {
    valueSearchBar: PropTypes.string.isRequired
};

export default BtnSearchbar;
