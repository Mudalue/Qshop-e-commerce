import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Alert = ({ color, data }) => {
  return (
    <>
      <div
        className={`alert alert-${color}`}
        role="alert"
        style={{ height: 60 }}
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <p className="mx-2">
              <FontAwesomeIcon
                icon={color === "success" ? faCircleCheck : faCircleExclamation}
                color={color}
                className={`text-${color} pt-2`}
              />
            </p>
            <p className={`text-${color} fw-bold lh-lg pb-2`}>{data}</p>
          </div>
          <div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
