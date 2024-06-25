import React, {useEffect, useState} from 'react';

import { ContactInfo, FooterStyle, Logo } from './Styles';
import LogoFooter from '../../assets/logo_footer.png'

const Footer = () => {
    
  
    return (
      <FooterStyle>
        <Logo src={LogoFooter}></Logo>
        <ContactInfo>
            <p>casatuetimbua@gmail.com</p>
            <p>(37) 9 9634 9759</p>
        </ContactInfo>
      </FooterStyle>
    );
  };
  
  export default Footer;