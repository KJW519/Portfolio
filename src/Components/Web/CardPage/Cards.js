import React, {useRef, useState} from 'react';
import styled from "styled-components";
import Minju from "../../../Assets/img/Minju.png"

const Container = styled.div `
    width: 220px;
    height: 310px;
    position: relative;
`;

const Card = styled.div `
    width: 500px;
    height: 300px;
    background-image: url(${Minju});
    background-size: cover;
    transition : all 0.3s ease-in-out;
    `;

const CardPage = () => {
    const [offset, setOffset] = useState({x: 0, y: 0});
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        const {offsetX, offsetY} = event.nativeEvent;
        setOffset({x: offsetX, y: offsetY});
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
        setOffset({x: 0, y: 0})
      };

    return (
        <Container onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card offsetX={offset.x} offsetY={offset.y}/>

            <p>Mouse X Offset: {offset.x}</p>
            <p>Mouse Y Offset: {offset.y}</p>
            <p>Is Hovered: {isHovered ? 'Yes' : 'No'}</p>
        </Container>
    );

};

export default CardPage;