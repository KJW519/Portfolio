import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Photo from "../../../Assets/img/Photo.webp";


const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden;
    position: relative; /* 커서 원을 상대적으로 배치하기 위한 부모 div */
    cursor:none;
    a { cursor: none;}
`;

const CursorCircle = styled.div`
  position: absolute;
  width: ${({ isHovering }) => (isHovering ? "200px" : "50px")};
  height: ${({ isHovering }) => (isHovering ? "200px" : "50px")};
  border-radius: 50%;
  background-color: white;
  mix-blend-mode: difference;
  left: ${({ x }) => x}px;  
  top: ${({ y }) => y}px;   
  transform: translate(-50%, -50%); 
  pointer-events: none;
  transition: width 0.2s ease, height 0.2s ease;
`;


const Card = styled.div`
    width: 800px;
    height: 500px;
    background-image: url(${Photo}); 
    background-size: cover;
    border-radius: 10px;
    margin: 50px;
`;

const Box = styled.div`
  width:100px;
  height:50px;
  background-color: red;
  margin-left: 50px;
  text-align: center;
  display: center;
`;

const MouseCursorPage = () => {
  const [cursorPosition, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const MouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setPosition({ x: mouseX, y: mouseY });
  };

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log('Mouse Over');
  }

  const handleMouseOut = () => {
    setIsHovering(false);
    
  }

  return (
    <Main onMouseMove={MouseMove}>
      <CursorCircle x={cursorPosition.x} y={cursorPosition.y} isHovering={isHovering} />

      <div style={{ color: "white" }}>
        현재 마우스의 좌표는 {cursorPosition.x} , {cursorPosition.y}
      </div>

      <Link to="/">홈으로 이동하기</Link>
      <Card />

      <Box
      isHovering ={isHovering}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}>
        hover Box
      </Box>
      
      
    </Main>
  );
};

export default MouseCursorPage;
