import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;       
  justify-content: space-between; 
  background-color: #000;
  min-width: 100vw;
  width: 100%;
  max-height: 120px;
  height: 5vw;
  padding: 5px 20px;
`;

export const Logo = styled.img`
  height: 80%;    
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100px;
  height: 30px;
  color: #fff;
  margin: 5px 16px;
  border: #fff solid 0.1px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;       
  width: 100%;
  margin: 0 18px;
`;

