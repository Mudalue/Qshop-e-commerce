import React from "react";
import mission from '../../asset/vision.jpg'
let style = {
  missionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    padding: "0 0 0 50px",
  },
  missionImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
  }
};

const About = () => {
  return (
    <>
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
                marginBottom: 50,
              }}
            >
              <div>
                <h4 className="text-light fw-bold text-center">About us</h4>
                <p
                  className="text-light"
                  style={{ fontSize: 12, fontWeight: 200 }}
                >
                  know who we are and what we stand for...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ margin: "50px 0" }}>
          <div className="col-md-6">
            <div style={style.missionContainer}>
              <div>
                <h4 className="lh-lg">Our Mission</h4>
                <p
                  style={{ width: "80%", fontSize: 13, fontWeight: 200 }}
                  className="lh-lg"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error nisi incidunt possimus provident asperiores recusandae,
                  assumenda, consectetur corporis quae veritatis quibusdam rerum
                  perferendis consequatur ex est dolor mollitia aliquid ipsum?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={style.missionImg}>
              <div>
                <img
                  src={mission}
                  alt="mission"
                  height={300}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
