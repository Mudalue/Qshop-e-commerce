import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const ScollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
    {showTopBtn && (
      <FontAwesomeIcon
        icon={faArrowCircleUp}
        className="icon-position icon-style"
        onClick={goToTop}
      />
    )}{" "}
  </div>
  )
}

export default ScollToTop