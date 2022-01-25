import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ text, icon }) => {
  return (
    <div className="hover:bg-white/30 hover:text-white hover:cursor-pointer flex items-center space-x-6 p-3 my-2 rounded-lg">
      <div className="w-6 flex items-center justify-evenly">
        {icon && <FontAwesomeIcon icon={icon} size="lg" />}
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default SideBarItem;
