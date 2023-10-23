import React from "react";
import Status from "./Status";

const Heading = (props) => {
  return (
    <div>
      <h1 className="displa-4 text-center">
        Lista de tareas {props.classroom}
      </h1>
      {props.enable && <Status classroom={props.classroom} enable={props.enable}></Status>}
      <hr />
    </div>
  );
};

export default Heading;
