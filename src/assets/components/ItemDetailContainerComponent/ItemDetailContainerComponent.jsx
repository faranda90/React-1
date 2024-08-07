import React from "react";
import { CartContext } from "../../context/CartContext";



const ItemDetailContainerComponent = ({ product }) => {
    const {addToCart, removeFromCart} =React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () => {
        setQuantity(quantity +1);
        addToCart(product,1);
    }

    const handleRemove = () => {
        setQuantity(quantity -1);
        removeFromCart(product,1);
    }

    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {product.images ? (
                    product.images.map((image, index) => {
                        return (
                            <img
                                key={index}
                                src={image}
                                alt={product.title}
                                style={{ width: 100, height: 100 }}
                            />
                        );
                    })
                ) : (
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: 100, height: 100 }}
                    />
                )}
            </div>
            <div style={{ marginLeft: 100 }}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
            <div>
                <button onClick={handleRemove} >-</button>
                <span>{quantity} </span>
                <button onClick={handleAdd} >+</button>
            </div>
        </div>
    );
};

export default ItemDetailContainerComponent;
