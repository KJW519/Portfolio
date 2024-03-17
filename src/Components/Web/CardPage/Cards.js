import React from "react";
import styled from "styled-components";
import Minju from "../../../Assets/img/Minju.png"

const Container = styled.div `
    width: 220px;
    height: 310px;
`;

const Card = styled.div `
    width: 500px;
    height: 310px;
    background-image: url(${Minju});
    background-size: cover;
    transition : all 0.3s ease-in-out;
    `; 

const CardPage = () => {
    const handleMouseOver =() => {
        Container.style = 'transform : rotateY(20deg);'
    };
    return (
        <Container>
            <Card></Card>
        </Container>
    );

};

export default CardPage;