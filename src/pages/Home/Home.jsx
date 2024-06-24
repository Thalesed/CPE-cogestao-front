import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Adicionar from '../../components/Adicionar/Adicionar';
import Card from '../../components/Card/Card';


const Home = () => {
  return (
    <>
    <Header/>
    <Adicionar/>
    <Card/>
    <Footer/>
    </>
  );
};

export default Home;