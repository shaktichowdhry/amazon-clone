import React from "react";
import "../assets/css/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the datalayer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="ProductImage" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
