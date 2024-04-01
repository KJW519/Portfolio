import React, { useState } from 'react';
import styled from "styled-components";
import Minju from "../../../Assets/img/Minju.png";

// 카드들을 담을 컨테이너 스타일링
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

// 각각의 카드를 담을 스타일링된 컨테이너
const CardContainer = styled.div`
    width: 220px;
    height: 310px;
    perspective: 350px; 
    text-align: center;
    margin: 20px;
`;

// 실제 카드의 스타일링
const Card = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${Minju});
    background-size: cover;
    transition: transform 0.1s ease-in-out; 
    transform-style: preserve-3d; 
    // offsetX, offsetY에 따라 회전 각도 설정, isHovered에 따라 hover 상태일 때만 회전
    transform: ${props => props.isHovered ? `rotateY(${ -1/5 * props.offsetX + 20 }deg) rotateX(${4/30 * props.offsetY - 20 }deg)` : 'none'};
`;

// CardPage 컴포넌트
const CardPage = () => {
    // 카드들의 상태를 관리하는 state
    const [cards, setCards] = useState([
        { id: 1, offsetX: 0, offsetY: 0, isHovered: false },
        { id: 2, offsetX: 0, offsetY: 0, isHovered: false },
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
        setCards(prevCards => prevCards.map((card, i) => {
            if (i === index) {
                return { ...card, isHovered: false};
            }
            return card;
        }));
    };

    return (
        <Container>
            {/* cards 배열을 map 함수를 사용하여 각각의 카드를 생성 */}
            {cards.map((card, index) => (
                <CardContainer key={card.id} onMouseMove={(event) => handleMouseMove(index, event)}>
                    {/* 각 카드에 대한 마우스 이벤트 및 상태 전달 */}
                    <Card offsetX={card.offsetX} offsetY={card.offsetY} isHovered={card.isHovered} 
                          onMouseEnter={() => handleMouseEnter(index)} 
                          onMouseLeave={() => handleMouseLeave(index)} />
                    <p>Mouse X Offset: {card.offsetX}</p>
                    <p>Mouse Y Offset: {card.offsetY}</p>
                    <p>Is Hovered: {card.isHovered ? 'Yes' : 'No'}</p>
                </CardContainer>
            ))}
        </Container>
    );
};

export default CardPage;
