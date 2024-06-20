import React, {useEffect, useState} from 'react';
import { Container, Input, Title } from './style';


const Adicionar = () => {
    
  
    return (
      <Container>
        <Title>Adicionar Eventos</Title>
        <Input type="text" placeholder="Evento"></Input>
        <Input type="text" placeholder="https://"></Input>
        <Input type="text" placeholder="Descrição curta"></Input>

      </Container>
    );
  };
  
  export default Adicionar;