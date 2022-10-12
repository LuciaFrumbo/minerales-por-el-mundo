import Item from "./Item"

const ItemList =({items}) => {

    return (
        <div class="item">
            {items.map(prod => <Item prod={prod} key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList