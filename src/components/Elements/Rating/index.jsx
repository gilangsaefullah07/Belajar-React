import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = () => {
  return (
    <div class="flex gap-2">
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-gray-400" />
      <FontAwesomeIcon icon={faStar} className="text-gray-400" />
    </div>
  );
};

export default Rating;
