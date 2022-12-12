import React, { useState, createContext, useEffect } from "react";
import Loader from "../../ui/atoms/Loader";
import { product_endpoint } from "../../constants/endpoints";
import Card from "../../ui/molecules/Card";
import { getRequest } from "../../utils/api";
import { category_endpoint } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";
import ScollToTop from "../../ui/atoms/ScollToTop";
import { Pagination } from "@material-ui/lab";
import usePagination from "../../utils/pagination";
const ProductContext = createContext();

const LandingPage = () => {
  let navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [category, setCategory] = useState([]);
  const [error, setError] = useState("");
  let [page, setPage] = useState(1);
  const PER_PAGE = 20;

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
  //pagination
  const count = Math.ceil(response.length / PER_PAGE);
  const _DATA = usePagination(response, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    getCategory();
    getAllProduct();
  }, []);
  return (
    <>
      <ScollToTop />
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                height: 300,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `linear-gradient(25deg,#d64c7f,#ee4758 50%)`,
              }}
              className="bg-dark"
            >
              <div>
                <h4 className="text-light fw-bold">Welcome to Tgf stores</h4>
                <p
                  className="text-light"
                  style={{ fontSize: 12, fontWeight: 200 }}
                >
                  get all your clothings and accessories...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12  col-lg-12">
            <div>
              <h2 className="fw-bold" style={{ fontSize: 18, marginTop: 20 }}>
                Categories
              </h2>
            </div>
            <div
              className="d-flex"
              style={{
                margin: "10px 0",
              }}
            >
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
                      style={{ display: "flex" }}
                    >
                      <span
                        className="pt-2"
                        style={{ fontWeight: 200, fontSize: 14, color: "#000" }}
                      >
                        {content.name}
                      </span>
                      <span className="mx-2">
                        <img
                          src={content.image}
                          // src={dummy}
                          alt="category"
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: "50%",
                            border: "2px solid #000",
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
      </div>
      {response !== "" ? (
        <>
          <ProductContext.Provider value={response}>
            <div className="container" style={{ marginTop: 20 }}>
              <div className="row">
                <div className="col-md-12">
                  <h2
                    className="fw-bold"
                    style={{ fontSize: 18, margin: "15px 0" }}
                  >
                    All products
                  </h2>
                </div>
              </div>
            </div>
            {show && <Loader />}
            <Card data={_DATA} />
          </ProductContext.Provider>
        </>
      ) : (
        <>
          <h4 className="fw-bold">{errorMessage}</h4>
        </>
      )}
      <div className="d-flex justify-content-center mt-3 mb-4">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default LandingPage;
