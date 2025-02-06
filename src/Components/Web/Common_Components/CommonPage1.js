import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;


const scroll = () => {
    return (
        <Container></Container>
    )
};

export default scroll;