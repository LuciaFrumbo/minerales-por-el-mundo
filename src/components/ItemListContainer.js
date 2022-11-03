import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import RingLoader from  "react-spinners/ClipLoader";
import {collection, getDocs, query, where} from "firebase/firestore"
import {database} from "../services/firebaseConfig"

function ItemListContainer ({greeting}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryName} = useParams();
    
    useEffect(() => {
        const collectionProd = collection(database,"productos");
       
       const referencia = categoryName
       ? query(collectionProd, where ("clasificacion", "==", categoryName),)
       : collectionProd;


        getDocs(referencia)
        .then((res) =>{
            const products = res.docs.map((prod) =>{
                return {
                    id: prod.id,
                    ...prod.data(),
                }
            })
            setItems(products);
        })

        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
            });

    }, [categoryName]);

    if (loading) {
        return (
            <div class="ringLoader">
                <RingLoader/>
            </div>
        );
    }



    return (
        <div>
        <h1 class="title">{greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;