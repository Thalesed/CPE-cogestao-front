import React, {useEffect, useState} from 'react';
import { Button, InputBox, InputContainer, PopBox, Selector, SubTitle, Title, Close} from './Styles';


const EditInfo = () => {
    return (
        <PopBox>
            <Title> Editar Informações</Title>
            <Close>X</Close>

            <InputContainer>
                <SubTitle>Título</SubTitle>
                <InputBox placeholder='Mude o título'></InputBox>
                <SubTitle>Imagem</SubTitle>
                <InputBox placeholder='Mude a imagem'></InputBox>
                <SubTitle>Descrição</SubTitle>
                <InputBox placeholder='Mude a descrição'></InputBox>
                <SubTitle>Categoria</SubTitle>
                <InputBox placeholder='Mude a categoria'></InputBox>
            </InputContainer>

            <Button>Salvar</Button>
        </PopBox>
    );
};
  
export default EditInfo;