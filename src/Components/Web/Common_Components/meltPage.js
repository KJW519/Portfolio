import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color: black;
`;

const Word1 = styled.div`
    width: 10vw;
    height: 30vh;
    color: white;
`;

const App = () => {
    const [scale, setScale] = useState(1);
    const [growing, setGrowing] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setScale(prevScale => {
          if (prevScale >= 3) {
            setGrowing(false);
          } else if (prevScale <= 1) {
            setGrowing(true);
          }
          return growing ? prevScale + 0.015 : prevScale - 0.015;
        });
      }, 30);
  
      return () => clearInterval(interval);
    }, [growing]);
  
    return (
      <div className="App">
        <h1 style={{ 
          transform: `scaleY(${scale})`, 
          transformOrigin: 'top', 
          transition: 'transform 0.2s' 
        }}>
          Push and Pull
        </h1>
      </div>
    );
  }
  
  export default App;