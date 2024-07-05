import React from "react";
import styled from "styled-components";
import logo from "../Assets/image1.svg";

function Nav() {
  return (
    <Wrapper>
      <div className="nav">
        <div className="image">
          <img src={logo} />
        </div>

        <div className="links">
          <button className="btn1">Watch News</button>
          <button className="btn1">Watch News</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Nav;

const Wrapper = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
  }

  .image {
    padding: 15px;
  }
  .links {
    padding: 50px;
  }
  .btn1 {
    color: white;
    background-color: rgb(99, 94, 163);
    padding: 14px 38px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }
`;
