import React from "react";
import { useNavigate } from "react-router-dom";
import dummy from "../asset/dummy.jpg";

const Card = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((content) => (
            <>
            <div className="col-md-3 mt-2" key={content.id}>
              <div
                className="card gallery-card"
                style={{
                  backgroundColor: "transparent",
                  padding: 20,
                  height: 400,
                }}
              >
                <div style={{ textAlign: "center", marginTop: 30 }}>
                  <img
                    // src={content.images[1]}
                    src={dummy}
                    alt="frame"
                    style={{ width: "100%", height: 300 }}
                    className="img-fluid"
                  />
                  <div style={{ paddingTop: 10 }}>
                    <p
                      className="text-dark m-0 lh-lg cursor"
                      onClick={() =>
                        navigate(`/product/${content.id}`, { replace: true })
                      }
                    >
                      {content.title}
                    </p>
                    <p
                      className="text-dark m-0 fw-bolder"
                      style={{ fontSize: 18 }}
                    >
                      &#8358; {content.price}
                    </p>
                  </div>
                </div>
                <div className="overlay">
                  <div
                    className="card-body"
                    style={{ flexDirection: "column", paddingTop: 100 }}
                  >
                    <h6 className="fw-bold">Description</h6>
                    <p className="lh-lg" style={{fontSize: 13}}>{content.description}</p>
                  </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
