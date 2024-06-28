import styled from "styled-components";

export const PopBox = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 12px;
    text-align: center;
    align-items: center;
    position: fixed;
    width: 240px;
    height: 270px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Title = styled.h2`
    text-align: center;
    margin: 10px;
    font-size: 1em;
`

export const InputContainer = styled.div`
    align-self: center;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
`

export const Selector = styled.select`
    background-color: transparent;
    color: white;
    padding-left: 10px;
    width: 30%;
    border-radius: 5px;
`

export const InputBox = styled.input`
    background-color: transparent;
    color: #000;
    padding-left: 10px;
    width: 70%;
    border-radius: 5px;
    border-color: #000;
    margin-left: 12px;
    margin-bottom: 9px;
`

export const SubTitle = styled.h3`
    font-size: 0.5em;
    margin-left: 12px;
    margin-bottom: 2px;
    text-decoration: bold;
    right: 0;
`

export const Button = styled.button`
    background-color: transparent;
    border-radius: 12px;
    border-color: gold;
    color: orange;
    text-transform: capitalize;
    padding: 5px 25px;
`

export const Close = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2em;
`