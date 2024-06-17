import React, {useEffect, useState} from 'react';
import { Button, HeaderStyle, Logo, ButtonContainer} from './style';
import LogoPng from './Logo.png'

const Header = () => {
    
  
    return (
      <HeaderStyle>
        <Logo src={LogoPng}></Logo>
        <ButtonContainer>
            <Button>Home</Button>
            <Button>Eventos</Button>
        </ButtonContainer>
      </HeaderStyle>
    );
  };
  
  export default Header;