import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppState = (props) => {
  // const color = "rgb(207,241,30)";
  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};

export default AppState;
