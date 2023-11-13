/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatDistanceFromNow } from "../utils/helper";
import { SiFiles } from "react-icons/si";

function Course({ newCourse }) {
  return (
    <Link to="/enroll" state={newCourse}>
      <div className="h-[7rem] w-full bg-gray-50 flex items-center justify-center">
        <SiFiles size={26} />
      </div>
      <h3 className="text-md font-bold mb-4 mt-2">{newCourse?.title}</h3>
      <p className="text-sm text-gray-500 font-light mb-2">
        {newCourse?.User?.userName}
      </p>
      <p className="text-sm text-gray-500 font-light">
        Created on:{" "}
        <strong className="font-semibold">
          {formatDistanceFromNow(newCourse?.created_at)}
        </strong>
      </p>
    </Link>
  );
}

export default Course;
