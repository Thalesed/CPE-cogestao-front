import React, {useEffect, useState} from 'react';
import {Box, Description, Img, Title} from './style';


const Card = () => {
    return (
        <Box>
            <Img></Img>
            <Title >Título</Title>
            <Description>Breve descrição</Description>
        </Box>
    );
};

export default Card;
