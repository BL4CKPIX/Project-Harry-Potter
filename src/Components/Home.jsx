import React from "react";
import * as S from './StyleHome'
import Foto from '../Img/Logo.png'
const Home = () =>{
    return(
        <S.ContainerHome>
            <img src={Foto} alt='Logo' />
            <S.H2>Venha Conhecer esse mundo de Fantasia</S.H2>
        </S.ContainerHome>
    )
}

export default Home;