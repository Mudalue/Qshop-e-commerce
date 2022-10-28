import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const style = {
  footer: {
    background: "#000",
    padding: "100px 50px",
  },
  list: {
    listStyle: "none",
  },
  anchor: {
    textDecoration: "none",
    color: "#fff",
    margin: "8px 4px",
    lineHeight: 2,
    fontSize: 13,
    
  },
};
const Footer = () => {
  const brand = [{name:"facebook", icon: faFacebook}, {name:"twitter", icon: faTwitter}, {name: "instagram", icon:faInstagram}, {name:"mail", icon: faEnvelope}];

  //   const header = ["about", "developer", "support", "business"];
  const content = ["career", "advertise", "blog", "terms"];

  const text = [
    { header: "about", value: "career" },
    { header: "developers", value: "advertise" },
    { header: "support", value: "blog" },
  ];
  return (
    <footer style={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <h3 className="text-light">TGF</h3>
          </div>
          <div className="col-md-2 col-sm-12">
            <ul style={style.list}>
            <div>
                  <h6 className="text-capitalize text-light fw-bold">
                  Social media
                  </h6>
                </div>
              {brand.map((brands) => (
                <li>
                  <a href="0#" style={style.anchor} className="normal-font">
                    <FontAwesomeIcon icon={brands.icon} color="#fff"/> {brands.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {text.map((texts) => (
            <div className="col-md-2 col-sm-6">
              <ul style={style.list}>
                <div>
                  <h6 className="text-capitalize text-light fw-bold">
                    {texts.header}
                  </h6>
                </div>
                {content.map((contents) => (
                  <li>
                    <a href="0#" style={style.anchor} className="normal-font">
                      {contents}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-md-2">
            <div>
              <button
                className="btn fw-bold text-light"
                style={{
    
                  width: "100%",
                  padding: "10px"
                }}
              >
                Advertise Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
