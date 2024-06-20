import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Authprovider } from "./Context/Authprovider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Authprovider>
      <div className="dark:bg-slate-100 dark:text-black">
        <App />
      </div>
    </Authprovider>
  </BrowserRouter>
);
