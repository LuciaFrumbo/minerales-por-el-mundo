import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import RingLoader from  "react-spinners/ClipLoader";
import { collection, doc, getDoc } from "firebase/firestore";
import {database} from "../services/firebaseConfig"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const collectionProd = collection(database, "productos")
        const ref = doc(collectionProd, id)

        getDoc(ref)
            .then((res) =>{
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                });
       
}, [id]);

if (loading) {
    return (
        <div class="ringLoader">
            <RingLoader/>
        </div>
    );
}

return (
    <div className="item-list-container">
        <ItemDetail item={item} />
    </div>
);
};

export default ItemDetailContainer;