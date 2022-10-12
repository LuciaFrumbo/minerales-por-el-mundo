import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import {products} from '../components/AsyncMock';
import {useParams} from 'react-router-dom';

function ItemListContainer ({greeting}) {
    const [items, setItems] = useState([]);

    const {categoryName} = useParams();
    
    useEffect(() => {
        const getProducts = () => {
            return new Promise((res) => {
                const prodFiltrados = products.filter((prod) => prod.clasificacion === categoryName);
                
                setTimeout (() => {
                    res(categoryName ? prodFiltrados : products)
        
                }, 2000)
            })
        };
        getProducts().then((res) => {
            setItems(res)
        })

    }, [categoryName]);

    console.log(categoryName)

    return (
        <div>
        <h1 class="title">{greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;