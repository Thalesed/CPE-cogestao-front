import React, {useEffect, useState} from 'react';
import { Container, Input, Title, Instruction, InputBox, Selector, Button} from './style';


const Adicionar = () => {
    
  
    return (
      <Container>
        <Title>Adicionar Eventos</Title>
        <InputBox>
          <Instruction>Título</Instruction>
          <Input type="text" placeholder="Evento"></Input>
        </InputBox>
        <InputBox>
          <Instruction>Imagem</Instruction>
          <Input type="text" placeholder="https://"></Input>
        </InputBox>
        <InputBox>
          <Instruction>Descrição</Instruction>
          <Input type="text" placeholder="Descrição curta"></Input>
        </InputBox>

        <Selector>
          <option>teste</option>
        </Selector>

        <Button>Enviar</Button>
        
      </Container>
    );
  };
  
  export default Adicionar;