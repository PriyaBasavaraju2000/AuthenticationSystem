import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter} from "react-router-dom";
import {AppContextProvider} from "./Context/AppContext.jsx";
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AppContextProvider>
        <App />
          <ToastContainer />
      </AppContextProvider>
  </BrowserRouter>
)
