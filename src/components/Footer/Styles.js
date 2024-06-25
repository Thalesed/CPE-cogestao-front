import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    width: 100%;
    height: 180px;
    padding: 5px 20px;
    position: relative;
    bottom: 0;
    left: 0;
    z-index: 1000;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 8px;
    color: white;
    padding: 10px;
    p {
        margin-right: 20px;
        margin-bottom: 0px;
        margin-top: 0px;
    }
`;

export const Logo = styled.img`
    height: 80%;
    margin: 0 18px;
`;
