import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  min-width: 1500px;
  width: 100vw;
`;

const HomeFirst = () => {
    return (
        <Div>
            mainHomepage
            <Link to="/card">카드로 이동하기</Link>
            <Link to="/MousePage"> 마우스 커서 페이지로 이동하기 </Link>
        </Div>
    );
};

export default HomeFirst;