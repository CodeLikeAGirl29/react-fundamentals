import React from "react";
import Part from "./Part";

const Content = (props) => {
  const parts = props.parts.map((part) => (
    <Part key={part.id} text={part.name} value={part.exercises} />
  ));

  const partsCopy = props.parts.map((part) => part.exercises);
  const total = partsCopy.reduce((s, p) => s + p);

  return (
    <div>
      {parts}
      <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>
    </div>
  );
};

export default Content;