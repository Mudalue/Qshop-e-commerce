import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { product_endpoint } from "../../constants/endpoints";
import { getRequest } from "../../utils/api";
import Slider from "react-slick";
import Button from "../../ui/atoms/Button";
import { colors } from "../../constants/colors";
import { AppContext } from "../../context/CartContexts";
// import carousel from "../../asset/cristina-matos-albers-Ltv7a5m8i4c-unsplash.jpg";
import Loader from "../../ui/atoms/Loader";
import Alert from "../../ui/atoms/Alert";

const ProductPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let { productid } = useParams();
  const [response, setResponse] = useState({});
  const [imageUrl, setImageUrl] = useState([]);
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [alerting, setAlerting] = useState({
    color: "",
    data: "",
    show: false,
  });

  //get product by id
  const getProductById = async () => {
    setShow(true);
    const response = await getRequest(
      `${product_endpoint.product}/${productid}`
    );
    if (response.status === 200) {
      setResponse(response.data);
      setImageUrl(response.data.images);
      setCategory(response.data.category.name);
    }
    setShow(false);
  };
  // saving cart to local storage
  const save = () => {
    let products = [...cart];
    if (products.length === 0) {
      products.push({
        id: response.id,
        itemName: response.title,
        price: response.price,
        amount: count * response.price,
        item: count,
      });
      setCart(products);
      setAlerting({
        color: "success",
        data: "Item added in successfully",
        show: true,
      });
    } else {
      const check = products.find((item) => item.id === response.id);
      if (check) {
        setAlerting({
          color: "danger",
          data: "Item already in cart",
          show: true,
        });
      } else {
        products.push({
          id: response.id,
          itemName: response.title,
          price: response.price,
          amount: count * response.price,
          item: count,
        });
        setCart(products);
        setAlerting({
          color: "success",
          data: "Item added in successfully",
          show: true,
        });
      }
    }
  };

  useEffect(() => {
    getProductById();
  }, []);
  return (
    <>
      {alerting.show && <Alert color={alerting.color} data={alerting.data} />}
      {show === true ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="container">
            <div className="row" style={{ margintop: 30, marginBottom: 50 }}>
              <div className="col-md-6" style={{ marginTop: 20 }}>
                <Slider {...settings}>
                  {imageUrl.map((image) => (
                    <img src={image} alt="carousel" />
                  ))}
                  {/* <img
                    src={carousel}
                    alt="carousel"
                    style={{ width: 200, height: 200 }}
                    className="img-fluid"
                  /> */}
                </Slider>
              </div>
              <div className="col-md-6">
                <div style={{ paddingTop: 50 }}>
                  <h4 className="fw-bold" style={{ color: "#928D8D" }}>
                    {response.title}
                  </h4>
                  <hr />
                  <div>
                    <h6 style={{ fontSize: 14 }} className="fw-bold">
                      Price
                    </h6>
                    <h2 className="fw-bolder" style={{ color: "#928D8D" }}>
                      &#8358; {response.price}
                    </h2>
                  </div>
                  <hr />
                  <div>
                    <h6 style={{ fontSize: 14 }} className="fw-bold">
                      Description
                    </h6>
                    <p
                      className="lh-lg"
                      style={{ fontSize: 12, color: "#928D8D" }}
                    >
                      {response.description}
                    </p>
                  </div>

                  <div>
                    <h6 style={{ fontSize: 14 }} className="fw-bold">
                      Category
                    </h6>
                    <p
                      className="lh-lg"
                      style={{ fontSize: 12, color: "#928D8D" }}
                    >
                      {category}
                    </p>
                  </div>

                  <div className="d-flex">
                    <input
                      type="number"
                      className="form-control me-2"
                      style={{ width: 100, boxShadow: "none" }}
                      defaultValue={count}
                      onChange={({ target: { value } }) => setCount(value)}
                      min="1"
                    />
                    <Button
                      text="Add to cart"
                      color={colors.black}
                      onclick={save}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
