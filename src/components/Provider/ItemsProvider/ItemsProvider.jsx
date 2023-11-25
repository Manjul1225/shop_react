import React, { useEffect, useState } from 'react';
import LoadingScreen from '../../../Pages/LoadingScreen';
import { PropTypes } from 'prop-types';

export const ItemsContext = React.createContext();
export const GetItemByIdContext = React.createContext();

function ItemsProvider({ children }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    function getItemById(id) {
        const Items = items;
        if (typeof id != 'number') {
            console.error('id is not a number');
            return [];
        }

        return Items.filter((item) => {
            return item.id === id;
        });
    }

    useEffect(() => {
        function addNumberToData(data) {
            data.forEach((item) => {
                item.number = 0;
                return item;
            });

            return data;
        }

        async function fetchAllItems() {
            await fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((data) => {
                    addNumberToData(data);
                    setItems(data);
                    setLoading(false);
                })
                .catch((error) => console.log(error));
        }

        function dataApiToCache(apiURL, cacheName) {
            caches.open(cacheName).then((cache) => {
                cache.add(apiURL).catch((error) => console.error(error));
            });
        }

        async function manageApiData(apiURL, cacheName) {
            await caches.open(cacheName).then((cache) => {
                cache
                    .match(apiURL)
                    .then((res) => {
                        if (res) {
                            return res.json();
                        }
                        Promise.reject(new Error('no data in cache'));
                    })
                    .then((data) => {
                        if (!data) return;
                        addNumberToData(data);
                        setItems(data);
                        setLoading(false);
                    })
                    .catch((error) => console.log(error));
            });
        }

        if ('caches' in window) {
            caches.open('itemsStore').then((cache) => {
                cache.match('https://fakestoreapi.com/products').then((res) => {
                    if (!res) {
                        fetchAllItems();
                        dataApiToCache('https://fakestoreapi.com/products', 'itemsStore');
                    } else {
                        manageApiData('https://fakestoreapi.com/products', 'itemsStore');
                    }
                }).catch(error => {
                    console.log(error);
                    fetchAllItems();
                })
            });
        } else {
            fetchAllItems();
        }

        return () => {
            setItems([]);
            setLoading(true);
        };
    }, []);

    return (
        <ItemsContext.Provider value={items}>
            <GetItemByIdContext.Provider value={getItemById}>
                {loading ? <LoadingScreen /> : children}
            </GetItemByIdContext.Provider>
        </ItemsContext.Provider>
    );
}

ItemsProvider.propTypes = {
    children: PropTypes.element
};

export default ItemsProvider;
