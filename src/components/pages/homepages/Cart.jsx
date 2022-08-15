import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context/CartContexts";
import Button from "../../atoms/Button";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useContext(AppContext);
  const [count, setCount] = useState();
  const [totalPrice, setTotalPrice] = useState([]);
  let navigate = useNavigate();

  //link
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  


  return (
    <>
      {cart.length === 0 ? (
        <>
          <div style={{ marginTop: 50 }}>
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
        <div className="container">
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
                          text="update cart"
                          color={colors.yellow}
                          size="sm"
                          onclick={() => {
                            let arr = [...cart];
                            const getItem = arr.filter(
                              (obj) => obj.id !== item.id
                            );
                            console.log(getItem)
                            console.log(arr)
                            arr.push({
                              id: item.id,
                              itemName: item.itemName,
                              price: item.price,
                              amount: count * item.price,
                              item: count,
                            });
                            setCart(arr)
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <p className="fw-bold">
                        Product:{" "}
                        <span className="fw-light">{item.itemName}</span>
                      </p>
                      <hr />
                      <p className="fw-bold">
                        Price:{" "}
                        <span className="fw-light">&#8358; {item.price} </span>
                      </p>
                      <hr />
                      <p className="fw-bold">
                        sub amount:{" "}
                        <span className="fw-light">&#8358; {item.amount} </span>
                      </p>
                      <hr />
                      <div className="d-flex">
                        <p className="me-2 fw-bold">No of Item:</p>
                        <input
                          type="number"
                          className="form-control"
                          style={{ width: 60, boxShadow: "none", height: 30 }}
                          defaultValue={item.item}
                          onChange={({ target: { value } }) => setCount(value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="text-center">
              <h2 className="fw-bolder lh-lg">
                Total amount: 
                <span className="mx-2">
                  &#8358;
                  {cart.reduce(
                    (total, currentItem) =>
                      (total = total + currentItem.amount),
                    0
                  )}
                </span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
