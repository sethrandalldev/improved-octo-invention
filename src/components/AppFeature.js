import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppFeature = (props) => {
  return (
    <div>
      <div
        className={`flex bg-gradient-to-b ${props.gradient} rounded-full flex-col items-center text-white p-3 h-40 w-40 justify-center`}
      >
        <FontAwesomeIcon size="4x" icon={props.icon} />
      </div>
      <h3 className="text-center text-2xl text-white pt-8">{props.title}</h3>
    </div>
  );
};

export default AppFeature;
