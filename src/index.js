import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App"
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider appId="2CnWnjNWkd0F6bAOJA3VfzSJO2f4JAyje7lL1Ewp" serverUrl="https://ldamngvvnbxf.usemoralis.com:2053/server" >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoralisProvider>,
  document.getElementById("root")
);
