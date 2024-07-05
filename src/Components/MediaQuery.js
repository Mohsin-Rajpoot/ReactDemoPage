import React from "react";
import styled from "styled-components";

export default function MediaQuery() {
  return (
    <Wrapper>
      <div className="parent">
        <div className="one">
          first div Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </div>
        <div className="two">
          second div Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .parent {
    color: red;
    display: flex;
    justify-content: space-around;
  }
  .one {
    width: 30%;
    padding: 10px;
    border: 1px solid red;
  }
  .two {
    width: 30%;
    border: 1px solid black;
  }

  @media (max-width: 600px) {
    .one,
    .two {
      width: 40%;
      color: blue;
    }
  }

  @media (max-width: 400px) {
    .parent {
      display: block;
    }
    .one,
    .two {
      width: 70%;
      color: yellow;
    }
  }
`;
