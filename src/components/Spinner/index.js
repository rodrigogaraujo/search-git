import React, { Fragment } from "react";

import spinner from "../../assets/spinner.gif";

export const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Carregando..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
