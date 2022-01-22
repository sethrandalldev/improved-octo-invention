import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ text, icon }) => {
  return (
    <div className="hover:bg-secondary/30 hover:text-secondary hover:cursor-pointer flex items-center space-x-4 p-3 m-3 rounded-lg">
      {icon && <FontAwesomeIcon icon={icon} />}
      <h3>{text}</h3>
    </div>
  );
};

export default SideBarItem;
