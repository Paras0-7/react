import { mockedCoursesList } from "./../../constants";
import { CourseCard } from "./components/CourseCard";
import "./Courses.css";
export const Courses = function () {
  return (
    <>
      <ul className="courses">
        {mockedCoursesList.map(function (course) {
          return <CourseCard key={course.id} course={course} />;
        })}
      </ul>
    </>
  );
};
