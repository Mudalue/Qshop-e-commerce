import React, { useState, createContext, useEffect } from "react";
import Loader from "../../ui/atoms/Loader";
import { product_endpoint } from "../../constants/endpoints";
import Card from "../../ui/molecules/Card";
import { getRequest } from "../../utils/api";
import { category_endpoint } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";
import ScollToTop from "../../ui/atoms/ScollToTop";
const ProductContext = createContext();

const LandingPage = () => {
  let navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [category, setCategory] = useState([]);
  const [error, setError] = useState("");
  //get All product
  const getAllProduct = async () => {
    setShow(true);
    const response = await getRequest(product_endpoint.product);
    console.log(response);
    if (response.status === 200) {
      setResponse(response.data);
    }
    setErrorMessage(
      "Cannot access products currently... please try again later"
    );
    setShow(false);
  };
  //get Category
  const getCategory = async () => {
    const response = await getRequest(category_endpoint.categories);
    console.log(response);
    if (response.status === 200) {
      setCategory(response.data);
    }
    setError("No Available category at the moment!! please try again later");
  };

  useEffect(() => {
    getCategory();
    getAllProduct();
  }, []);
  return (
    <>
    <ScollToTop />
      <div className="container">
        <div className="row">
          <div className="col-md-12  col-lg-12">
            <div className="d-flex" style={{flexWrap: "wrap", justifyContent: "space-evenly", margin: '10px 0'}}>
            {category.length === 0 ? (
              <>
                <p>{error}</p>
              </>
            ) : (
              <>
                {category.map((content) => (
                  
                    <button
                      className="btn btn-transparent"
                      onClick={() =>
                        navigate(`category/${content.id}`, {
                          replace: true,
                        })
                      }
                      key={category.id}
                      style={{ margin: "3px 0", display: "flex" }}
                    >
                      <span
                        className="pt-2"
                        style={{ fontWeight: 400, fontSize: 14, color: "#000" }}
                      >
                        {content.name}
                      </span>
                      <span className="mx-2">
                        <img
                          src={content.image}
                          // src={dummy}
                          alt="category"
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                          }}
                        />
                      </span>
                    </button>
                 
                ))}
              </>
            )}
             </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                height: 300,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              className="bg-dark"
            >
              <h4 className="text-light fw-bold">Advertise here</h4>
            </div>
          </div>
        </div>
      </div>
      {response !== "" ? (
        <>
          <ProductContext.Provider value={response}>
            <div className="container" style={{ marginTop: 20 }}>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="fw-bold" style={{ fontSize: 16 }}>
                    All products
                  </h2>
                </div>
              </div>
            </div>
            {show && <Loader />}
            <Card data={response} />
          </ProductContext.Provider>
        </>
      ) : (
        <>
          <h4 className="fw-bold">{errorMessage}</h4>
        </>
      )}
    </>
  );
};

export default LandingPage;
