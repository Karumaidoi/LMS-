import { Spinner } from "flowbite-react";
import { useCourses } from "../hooks/useCourses";
import Course from "./Course";

function Courses() {
  const { courses, fetchingCourses } = useCourses();

  console.log(courses);

  if (fetchingCourses) {
    return (
      <div className="w-full h-[10rem] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="mt-[4rem] ">
      <div className="mb-7">
        <h1 className="text-[1.8rem] font-semibold mb-3">What to learn next</h1>
        <h5 className="text-[1.4rem] font-semibold">
          Popular course recommended for Students
        </h5>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {courses.map((course, index) => {
          return <Course key={index} newCourse={course} />;
        })}
      </div>
    </div>
  );
}

export default Courses;
