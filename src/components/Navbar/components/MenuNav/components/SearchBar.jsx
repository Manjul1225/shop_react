import ListItems from './ListItems';
import BtnSearchBar from './BtnSearchbar';
import { useState } from 'react';

function SearchBar() {
    const [valueSearchBar, setValueSearchBar] = useState('');

    function handleOnChangeSearchBar(e) {
        let loweredString = e.target.value.toLowerCase();

        e.preventDefault();
        setValueSearchBar(loweredString);
    }

    return (
        <div className='flex items-center justify-center relative mt-4 md:mt-0 w-[90%] md:w-auto'>
            <div className='w-full max-w-sm'>
                <BtnSearchBar valueSearchBar={valueSearchBar} />
                <div className='relative'>
                    <input
                        type='text'
                        className='block border p-2 pl-9 mt-4 border-black w-[100%]
                    md:m-4 md:py-1 md:w-48 md:text-lg md:h-10 md:ml-2
                    lg:w-60'
                        onChange={(e) => handleOnChangeSearchBar(e)}
                        value={valueSearchBar}
                        placeholder='Type to search..'
                    ></input>
                    <ListItems
                        valueSearchBar={valueSearchBar}
                        setValueSearchBar={setValueSearchBar}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
