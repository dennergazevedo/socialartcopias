import React from 'react';

// STYLES
import GlobalStyles from '../src/styles/global';

// ASSETS
import background from './assets/background.png';
import logo from './assets/logo.svg';
import feitapravoce from './assets/feitapravoce.png';

// STYLED COMPONENTS
import {
  Container,
  Background,
  Logomarca,
  ItemFace,
  ItemInsta,
  ItemWpp,
  ItemSite,
  Footer,
  FeitaPraVoce,
  Title
} from './styles.js';

// ICONS
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram
} from 'react-icons/fa';

import{
  BiWorld
} from 'react-icons/bi';

function App() {

  function handleFace(){
    window.location.href="https://www.facebook.com/art.copias";
  }

  function handleInsta(){
    window.location.href="https://www.instagram.com/artcopiasjm";
  }

  function handleSite(){
    window.location.href="https://www.artcopias.com.br";
  }

  function handleWpp(){
    window.location.href="https://api.whatsapp.com/send?phone=5531989620800";
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Background src={background} alt="BACKGROUND" />
        <FeitaPraVoce src={feitapravoce} alt="FEITA PRA VOCÊ" />
        <Logomarca 
          src={logo} 
          alt="LOGOMARCA" 
          animate={{ y: 15, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}/>
        <Title>
          <b>Bem vindo(a) à sua gráfica digital!</b>
          <span>Por onde gostaria de falar com a gente?</span>
        </Title>
        <ItemFace
          onClick={handleFace}
          initial={{ x: -25 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}>
          <FaFacebookF className="icon"/>
          <span>@art.copias</span>
        </ItemFace>
        <ItemInsta
          onClick={handleInsta}
          initial={{ x: 25 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}>
          <FaInstagram className="icon"/>
          <span>@artcopiasjm</span>
        </ItemInsta>
        <ItemWpp
          onClick={handleWpp}
          initial={{ x: -25 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}>
          <FaWhatsapp className="icon"/>
          <span>(31)9 8962-0800</span>
        </ItemWpp>
        <ItemSite
          onClick={handleSite}
          initial={{ x: 25 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}>
          <BiWorld className="icon"/>
          <span>artcopias.com.br</span>
        </ItemSite>
        <Footer>
          <span>&copy; Art Cópias {new Date().getFullYear()} - CNPJ: 07.471.796/0001-00</span>
          <span>Criado por{" "}
            <a
              href="https://www.instagram.com/dennergazevedo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp;dnr
            </a>
        </span>
        </Footer>
      </Container>
    </>
  );
}

export default App;
