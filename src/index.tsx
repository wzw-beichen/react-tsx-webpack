import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./index.module.less";
import "./index.less";
// import "./index.css";

const Index = () => {
  const name: string = "Hello!!!";
  return (
    <div className="app_main">
      <h1 className="app_main_name">{name}</h1>
      <h2 className={styles.app_main_text}>
        Welcome to your First React App..!!!!!!
      </h2>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
