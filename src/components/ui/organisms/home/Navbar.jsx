import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { getRequest } from "../../../utils/api";
import { category_endpoint } from "../../../constants/endpoints";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/CartContexts";
import dummy from "../../../asset/cristina-matos-albers-Ltv7a5m8i4c-unsplash.jpg";
const style = {
  link: {
    fontWeight: "300",
    fontSize: 14,
  },
};
const Navbar = () => {
  let navigate = useNavigate();
  const [cart, setCart] = useContext(AppContext);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  //get Category
  const getCategory = async () => {
    const response = await getRequest(category_endpoint.categories);
    if (response.status === 200) {
      setResponse(response.data);
    }
    setError("No Available category at the moment!! please try again later");
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container" style={{ padding: "20px 10px" }}>
        <Link
          className="navbar-brand fw-bolder"
          to="/"
          style={{ fontSize: 25 }}
        >
          TGF
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
            <li className="nav-item">
              <Link
                className="nav-link active  cursor"
                aria-current="page"
                to="/"
                style={style.link}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  cursor" to="0#" style={style.link}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  cursor" to="0#" style={style.link}>
                Contact us
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle  cursor"
                href="0#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={style.link}
              >
                Category
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ width: 300, padding: "0" }}
              >
                {response.length === 0 ? (
                  <>
                    <p>{error}</p>
                  </>
                ) : (
                  <>
                    {response.map((category) => (
                      <li key={category.id}>
                        <div
                          className="dropdown-item d-flex justify-content-between cursor"
                          onClick={() =>
                            navigate(`category/${category.id}`, {
                              replace: true,
                            })
                          }
                        >
                          <p className="pt-2 fw-bold">{category.name}</p>
                          <p>
                            <img
                              src={category.image}
                              // src={dummy}
                              alt="category"
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                              }}
                            />
                          </p>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link  d-flex cursor m-sm-0"
                to="/cart"
                tabIndex={-1}
                aria-disabled="true"
                style={style.link}
              >
                <p className="mx-2">Cart</p>
                <p>
                  <FontAwesomeIcon icon={faShoppingCart} className="text-danger"/>{" "}
                  <span className="text-dark fw-bold">{cart.length}</span>
                </p>
              </Link>
            </li>
          </ul>
          <form className="d-flex" style={{ position: "relative" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ boxShadow: "none" }}
            />
            <p style={{ position: "absolute", top: "18%", right: "13%" }}>
              <FontAwesomeIcon icon={faSearch} />
            </p>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
