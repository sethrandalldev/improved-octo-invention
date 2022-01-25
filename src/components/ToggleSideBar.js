import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ToggleSideBar = (props) => {
  const [isLeft, setIsLeft] = useState(true);

  const onClick = () => {
    setIsLeft(!isLeft);
    props.toggle();
  };

  return (
    <div
      onClick={onClick}
      className={`absolute p-2 bg-white hover:bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center ${
        isLeft ? "right-negative" : "left-one"
      } top-20 border-primary border-2 cursor-pointer`}
    >
      <FontAwesomeIcon
        icon={isLeft ? faChevronLeft : faChevronRight}
        className="text-primary"
      />
    </div>
  );
};

export default ToggleSideBar;
