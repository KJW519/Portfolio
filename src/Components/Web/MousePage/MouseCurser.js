import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";


const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    overflow: hidden;
    position: relative; /* 커서 원을 상대적으로 배치하기 위한 부모 div */
    cursor:none;
`;

const CursorCircle = styled.div`
  position: absolute; /* absolute로 원의 위치를 조정 */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
  left: ${({ x }) => x}px;  
  top: ${({ y }) => y}px;   
  transform: translate(-50%, -50%); 
  pointer-events: none; /
`;

const MouseCursorPage = () => {
  const [cursorPosition, setPosition] = useState({ x: 0, y: 0 });

  const MouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setPosition({ x: mouseX, y: mouseY });
  };

  return (
    <Main onMouseMove={MouseMove}>
        
      <div>
        현재 마우스의 좌표는 {cursorPosition.x} , {cursorPosition.y}
      </div>
      <Link to="/">홈으로 이동하기</Link>
      
      <CursorCircle x={cursorPosition.x} y={cursorPosition.y} />
    </Main>
  );
};

export default MouseCursorPage;
