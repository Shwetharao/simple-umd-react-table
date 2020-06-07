import React from "react";
import ReactDOM from "react-dom";

/************** Table Component ****************/
import ReactTable from "./table-react.js";

/******* css file for application root **********/
import "./index.css";

/***** Render React component by embedding table component and parent id ************/
ReactDOM.render(<ReactTable />, document.getElementById('reactContainer'))