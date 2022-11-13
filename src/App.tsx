import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="test-container">
        <div className="test-child">this is a test underlined at 36rem</div>
      </div>
      <div className="container-type-inline-size">
        <div className="cq-w-22:underline">
          this is a test underlined at 36rem
        </div>
      </div>
    </>
  );
}

export default App;
