import React from "react";
import "../assets/css/Subtotal.css";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (items) => {
    let sum = 0;
    items.map((item) => {
      sum = sum + item.price;
    });
    return sum;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
