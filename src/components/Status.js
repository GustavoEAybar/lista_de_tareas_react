import React from "react";
import { Alert } from "react-bootstrap";

const Status = ( { classroom } ) => {
  return (
    <div>      
      <Alert variant="info">La comision {classroom} esta habilitada</Alert>
    </div>
  );
};

export default Status;
