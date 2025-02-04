import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card1 from "../../../Assets/img/Card.jpg";
import Minju from "../../../Assets/img/Minju.png";

const Background = styled.div`
    background-color: gray;
`;

// 카드들을 담을 컨테이너 스타일링
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
`;

// 각각의 카드를 담을 스타일링된 컨테이너
const CardContainer = styled.div`
    width: 400px;
    height: 500px;
    perspective: 700px; 
    text-align: center;
    margin: 50px;
`;

// 실제 카드의 스타일링
const Card = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${Card1}); 
    background-size: cover;
    border-radius: 10px;
    transition: transform 0.1s ease-in-out; 
    transform-style: preserve-3d; 
    transform: ${props => props.isHovered ? `rotateY(${ -1/5 * props.offsetX + 20 }deg) rotateX(${4/30 * props.offsetY - 20 }deg)` : 'none'};
`;


// CardPage 컴포넌트
const CardPage = () => {
    // 카드들의 상태를 관리하는 state
    const [cards, setCards] = useState([
        { id: 1, offsetX: 0, offsetY: 0, isHovered: false, url: Minju },
        { id: 2, offsetX: 0, offsetY: 0, isHovered: false, url: Card1 },
        { id: 3, offsetX: 0, offsetY: 0, isHovered: false, url: Minju },
        { id: 4, offsetX: 0, offsetY: 0, isHovered: false, url: Minju },
        { id: 5, offsetX: 0, offsetY: 0, isHovered: false, url: Minju },
        { id: 6, offsetX: 0, offsetY: 0, isHovered: false, url: Minju },
        // 필요한 만큼 카드 추가 가능
    ]);

    // 마우스 이동 시 호출되는 함수, offsetX, offsetY 업데이트
    const handleMouseMove = (index, event) => {
        const { offsetX, offsetY } = event.nativeEvent;
        setCards(prevCards => prevCards.map((card, i) => {
            if (i === index) {
                return { ...card, offsetX, offsetY };
            }
            return card;
        }));
    };

    // 마우스 진입 시 호출되는 함수, isHovered 상태를 true로 업데이트
    const handleMouseEnter = (index) => {
        setCards(prevCards => prevCards.map((card, i) => {
            if (i === index) {
                return { ...card, isHovered: true };
            }
            return card;
        }));
    };

    // 마우스 이탈 시 호출되는 함수, isHovered 상태를 false로 업데이트하고 offsetX, offsetY를 초기화
    const handleMouseLeave = (index) => {
        setTimeout(() => { // setTimeout을 사용하여 일정 시간 후에 회전 각도를 초기화합니다.
            setCards(prevCards => prevCards.map((card, i) => {
                if (i === index) {
                    return { ...card, isHovered: false, offsetX: 0, offsetY: 0};
                }
                return card;
            }));
        }, 500); // 500ms 후에 초기화되도록 설정합니다.
    };

    return (
        <Background>
            <Link to="/">Home</Link>
        <Container>
            {/* cards 배열을 map 함수를 사용하여 각각의 카드를 생성 */}
            {cards.map((card, index) => (
                <CardContainer key={card.id} onMouseMove={(event) => handleMouseMove(index, event)}>
                    {/* 각 카드에 대한 마우스 이벤트 및 상태 전달 */}
                    <Card offsetX={card.offsetX} offsetY={card.offsetY} isHovered={card.isHovered} 
                          onMouseEnter={() => handleMouseEnter(index)} 
                          onMouseLeave={() => handleMouseLeave(index)} />
                </CardContainer>
            ))}
        </Container>
        </Background>
    );
};

export default CardPage;
