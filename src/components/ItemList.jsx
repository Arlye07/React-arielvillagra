import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div>
            {items.map((producto)=>{
                return <Item producto={producto} key={producto.id} />;
            })}
        </div>
    );
};
export default ItemList;