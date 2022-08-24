import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { category_endpoint } from "../../constants/endpoints";
import Card from "../../ui/molecules/Card";
import { getRequest } from "../../utils/api";
import Loader from "../../ui/atoms/Loader";

const CategoryContext = createContext();
const Category = () => {
  const { categoryid } = useParams();
  const [response, setResponse] = useState([]);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [categoryName, setCategoryName] = useState("");
  //get category by id
  const getCategoryById = async () => {
    setShow(true);
    const response = await getRequest(
      `${category_endpoint.categories}${categoryid}/products`
    );
    if (response.status === 200) {
      setResponse(response.data);
      setCategoryName(response.data[0].category.name);
    }
    setErrorMessage(
      "Cannot access products currently... please try again later"
    );
    setShow(false);
  };
  useEffect(() => {
    getCategoryById();
  }, []);
  return (
    <>
      {show && <Loader />}
      {response !== "" ? (
        <>
          <CategoryContext.Provider value={response}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="fw-bolder px-2" style={{ fontSize: 30 }}>
                    {categoryName}
                  </h2>
                </div>
              </div>
            </div>
            <Card data={response} />
          </CategoryContext.Provider>
        </>
      ) : (
        <>
          <h4 className="fw-bold">{errorMessage}</h4>
        </>
      )}
    </>
  );
};

export default Category;
