import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    align-items: center;       
    justify-content: space-between; 
    background-color: #000;
    width: 100%;
    height: 180px;
    padding: 5px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
`

export const ContatoInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;   
    flex-direction: column;
    gap: 8px;
    color: white;
    width: 100%;
    padding: 10px;
    p{
        margin-bottom: 10px;
    }
`