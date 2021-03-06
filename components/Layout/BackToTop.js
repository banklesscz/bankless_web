import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleShowBackToTop = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };

  const onBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleShowBackToTop();
  });

  return (
    <div
      id="backto-top"
      className={visible ? "show" : ""}
      onClick={onBackToTopClick}
    >
      <FontAwesomeIcon icon="angle-up" />
    </div>
  );
};

export default BackToTop;
