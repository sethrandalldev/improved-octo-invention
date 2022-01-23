import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ text, icon }) => {
  return (
    <div className="hover:bg-white/30 hover:text-white hover:cursor-pointer flex items-center space-x-4 p-3 m-3 rounded-full md:rounded-lg">
      {icon && <FontAwesomeIcon icon={icon} />}
      <h3 className="hidden md:block">{text}</h3>
    </div>
  );
};

export default SideBarItem;
