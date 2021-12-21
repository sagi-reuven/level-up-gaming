import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleReactLightBox from "simple-react-lightbox";
import "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/index";
AOS.init();
ReactDOM.render(
  <BrowserRouter>
    <SimpleReactLightBox>
      <Provider store={store}>
        <App />
      </Provider>
    </SimpleReactLightBox>
  </BrowserRouter>,
  document.getElementById("root")
);
