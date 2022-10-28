import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context/CartContexts";
import Button from "../../ui/atoms/Button";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useContext(AppContext);
  const [count, setCount] = useState(0);
  let navigate = useNavigate();

  //link
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  //checkout 
  const checkout = () =>{
    navigate("/employ-me", {replace: true})
  }
//clear cart
const clearCart = () =>{
  setCart([]);
}
  return (
    <>
      {cart.length === 0 ? (
        <>
          <div style={{ marginTop: 100, marginBottom: 100 }}>
            <div className="text-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-danger"
                size="6x"
              />
            </div>
            <h2 className="text-center fw-bold lh-lg">
              No item available in Cart
            </h2>
            <p className="text-center text-danger cursor" onClick={handleClick}>
              choose an item to add to cart!
            </p>
          </div>
        </>
      ) : (
        <div className="container" style={{marginBottom: 50}}>
          <div className="row justify-content-center">
            {cart.map((item) => (
              <>
                <div className="col-md-7 m-2">
                  <div
                    className="card"
                    style={{ height: 300, padding: 20 }}
                    key={item.id}
                  >
                    <div className="d-flex justify-content-between">
                      <div className="cursor">
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-danger"
                          size="1x"
                          onClick={() => {
                            let value = item.id;
                            const arr = [...cart];
                            const cartItem = arr.filter(
                              (item) => item.id !== value
                            );
                            setCart(cartItem);
                          }}
                        />
                      </div>
                      <div>
                        <Button
                          text="update item"
                          color={colors.black}
                          size="sm"
                          onclick={() => {
                            let arr = [...cart];
                            let index = arr.findIndex(
                              (_index) => _index.id === item.id
                            );
                            const getItem = arr.filter(
                              (obj) => obj.id === item.id
                            );
                            let update = getItem[0];
                            update.item = count;
                            update.amount = count * update.price;
                            arr[index] = update;
                            setCart(arr);
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <p className="fw-bold" style={{fontSize: 14}}>
                        Product:{" "}
                        <span className="fw-light" style={{fontWeight: 100, fontSize: 12}}>{item.itemName}</span>
                      </p>
                      <hr />
                      <p className="fw-bold" style={{fontSize: 14}}>
                        Price:{" "}
                        <span className="fw-light" style={{fontWeight: 100, fontSize: 12}}>&#8358; {item.price} </span>
                      </p>
                      <hr />
                      <p className="fw-bold" style={{fontSize: 14}}>
                        sub amount:{" "}
                        <span className="fw-light" style={{fontWeight: 100, fontSize: 12}}>&#8358; {item.amount} </span>
                      </p>
                      <hr />
                      <div className="d-flex">
                        <p className="me-2 fw-bold" style={{fontSize: 14}}>Quantity:</p>
                        <input
                          type="number"
                          className="form-control"
                          style={{ width: 60, boxShadow: "none", height: 30, fontSize: 12 }}
                          defaultValue={item.item}
                          onChange={({ target: { value } }) => setCount(value)}
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="text-center">
              <h6 className="lh-lg">
                Total amount:
                <span className="mx-2 fw-bold" style={{fontSize: 20}}>
                  &#8358;
                  {cart.reduce(
                    (total, currentItem) =>
                      (total = total + currentItem.amount),
                    0
                  )}
                </span>
              </h6>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <div className="me-2">
                <Button text="Checkout" color={colors.black} size="lg" onclick={checkout}/>
              </div>
              <div>
                <Button text="Clear Cart" color={colors.red} size="lg" onclick={clearCart}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
