import React, {useEffect, useState} from 'react';

import { ContatoInfo, FooterStyle, Logo } from './style';
import LogoFooter from './logo_footer.png'

const Footer = () => {
    
  
    return (
      <FooterStyle>
        <Logo src={LogoFooter}></Logo>
        <ContatoInfo>
            <p>casatuetimbua@gmail.com</p>
            <p>(37) 9 9634 9759</p>
        </ContatoInfo>
      </FooterStyle>
    );
  };
  
  export default Footer;