import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect ( ()=> {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
            .catch(error=>console.log(error))

    }, [idItem])

    console.log(producto);
    
    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
