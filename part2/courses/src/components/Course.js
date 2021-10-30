import React from "react";
import Header from "./courseinfo/Header";
import Content from "./courseinfo/Content";

const Course = (props) => {
  const coursesCopy = props.courses.map((course) => {
    return (
      <div key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    );
  });

  return (
    <div>
      {/* {coursesCopy} */}
      {coursesCopy}
    </div>
  );
};

export default Course;
