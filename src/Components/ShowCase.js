import React from "react";
import "./ShowCaseStyles.css";

function ShowCase() {
  return (
    <div className="showcase">
      <div className="left">
        <h1>
          Predict Your
          <span className="colored">
            <br /> Dream
            <br /> Dev{" "}
          </span>
          Job Today
        </h1>
        <p>
          Discover the leading jobs in the
          <br /> industry and opt best job opportunity.
        </p>
        <button>Let's analyze insights</button>
      </div>

      <div className="right">
        <h5>Login Form</h5>
        <div className="labels">
          <input label="Name" placeholder="Name"></input>
          <input label="email" placeholder="Email"></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ShowCase;
