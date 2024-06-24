import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    width: 40%;
    margin-left: 25vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    background-color: transparent;
    text-decoration: underline;
    color: white;
`
export const InputBox = styled.div`
    justify-content: left;
    text-align: left;
    align-items: left;
    margin: 0;
    width: 100%;
`

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #fff;
    width: 100%;
    padding-top: 10px;
    color: #fff;
    margin-bottom: 10px;
    line-height: 1.5;
    
`

export const Instruction = styled.p`
    color: white;
    margin: 0;
    right: 0;
    text-decoration: bold;
`

export const Selector = styled.select`
    background-color: transparent;
    color: white;
    padding-left: 10px;
    width: 30%;
    border-radius: 5px;
`

export const Button = styled.button`
    background-color: rgb(238, 138, 8);
    color: white;
    padding: 12px 40px;
    border-color: transparent;
    border-radius: 5px;
    margin: 25px;
    cursor: pointer;
    
    &:hover{
        transform: scale(1.2);
        transition: 1s;
    }
`

