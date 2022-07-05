import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.min.js";
import 'antd/dist/antd.min.js'
import persistStore from "redux-persist/es/persistStore";
import store from "./Services/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./Services/Utils/Interceptors";
import { setupAxios } from "./Services/Utils/Interceptors";
import { ToastContainer } from "react-toastify";
import "./index.scss"
import "./Assets/Styles/custom.scss";

let persistor = persistStore(store);
setupAxios(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
