import React, { useState, createContext, useEffect } from "react";
import Loader from "../../atoms/Loader";
import { product_endpoint } from "../../constants/endpoints";
import Card from "../../molecules/Card";
import { getRequest } from "../../utils/api";

const ProductContext = createContext();
const LandingPage = () => {
  const [response, setResponse] = useState([]);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //get All product
  const getAllProduct = async () => {
    setShow(true);
    const response = await getRequest(product_endpoint.product);
    if (response.status === 200) {
      setResponse(response.data);
    }
    setErrorMessage(
      "Cannot access products currently... please try again later"
    );
    setShow(false);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      
      {response !== "" ? (
        <>
          <ProductContext.Provider value={response}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="fw-bolder px-2" style={{fontSize: 30}}>All products</h2>
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
