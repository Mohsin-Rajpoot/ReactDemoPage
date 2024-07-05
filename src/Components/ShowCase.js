import React from "react";
// import "./ShowCaseStyles.css";
import styled from "styled-components";

function ShowCase() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default ShowCase;

const Wrapper = styled.div`
  .showcase {
    background-image: url("../Assets/Group6295.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
  }
  .left {
    padding: 0px 0px 200px 0px;
  }
  h1 {
    font-size: 60px;
  }
  button {
    color: white;
    background: linear-gradient(
      85.89deg,
      rgb(73, 71, 140) 7.82%,
      rgb(151, 86, 255) 117.28%
    );
    padding: 15px 90px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }

  .colored {
    color: rgb(99, 94, 163);
  }
  .right {
    background-color: white;
    text-align: center;
  }
  input {
    display: block;
    padding: 12px 76px;
    margin: 6px;
  }
  .labels {
    display: block;
  }
  h5 {
    font-size: 16px;
  }
`;
