import { mockedAuthorsList } from "../../../constants";
import { Button } from "../../common/Button";
export const CourseCard = function (props) {
  return (
    <li>
      <div className="description">
        <h2>{props.course.title}</h2>
        <p>{props.course.description}</p>
      </div>
      <div className="details">
        <p>
          <strong>Authors</strong> :{" "}
          {props.course.authors
            .map(function (id) {
              const author = mockedAuthorsList.find(function (author) {
                return author.id === id;
              });

              return author.name;
            })
            .join(", ")}
        </p>
        <p>
          <strong>Duration</strong> : {props.course.duration}
        </p>
        <p>
          <strong>Created</strong> : {props.course.creationDate}
        </p>
        <Button>Show Course</Button>
      </div>
    </li>
  );
};
