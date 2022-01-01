import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { store } from "./store";
import { Provider } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyCiNAInyejCM_uv8LsNeM0eDyYU4fH2dJc",
  authDomain: "project-tracker-9ec23.firebaseapp.com",
  projectId: "project-tracker-9ec23",
  storageBucket: "project-tracker-9ec23.appspot.com",
  messagingSenderId: "528793926527",
  appId: "1:528793926527:web:9472025a73d9e91157b84a",
  measurementId: "G-048ZTJXFM6",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
