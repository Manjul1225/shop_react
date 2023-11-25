import { Link } from 'react-router-dom';
import { useItems } from '../../../../Provider/ItemsProvider/Hook';
import { PropTypes } from 'prop-types';

function ListItems({ valueSearchBar, setValueSearchBar }) {
    const ItemsShop = useItems();
    const filteredData = ItemsShop.filter((item) => {
        if (valueSearchBar === '') {
            return item;
        }

        return item.title.toLowerCase().includes(valueSearchBar);
    });

    if (!valueSearchBar) {
        return;
    }

    return (
        <div
            className={`absolute flex flex-col w-full overflow-scroll h-fit bg-white pl-2 border-x border-black
        md:top-14 md:left-2 md:w-48 lg:w-60 ${filteredData.length != 0 ? 'border-b' : null}`}
        >
            {filteredData.map((item) => {
                return (
                    <Link
                        aria-label={`auto complete searchbar btn for ${item.title}`}
                        key={item.id * 7872}
                        className='overflow-hidden text-ellipsis whitespace-nowrap py-2'
                        to={`/product/${item.id}`}
                        onClick={() => setValueSearchBar('')}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
}

ListItems.propTypes = {
    valueSearchBar: PropTypes.string.isRequired,
    setValueSearchBar: PropTypes.func.isRequired
};

export default ListItems;
