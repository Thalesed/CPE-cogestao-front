import { Button, HeaderStyle, Logo, ButtonContainer} from './Styles';
import LogoPng from '../../assets/Logo.png'

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