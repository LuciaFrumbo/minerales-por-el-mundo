import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return ( 
        <div class="product__text">
                <h1>{item.nombre}</h1>
                <h2>Origen: {item.origen}</h2>
                <img class="product__card__img" src={item.img} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>
                <ItemCount/>
            </div>
    );
};

    export default ItemDetail