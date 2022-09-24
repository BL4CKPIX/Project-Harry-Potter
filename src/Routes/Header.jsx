import React from 'react'
import {Link} from 'react-router-dom'
import * as S from './StyleHeader'
const Header = ({rota1, rota2, rota3, rota4, rota5, rota6}) =>{
    return(
        <div>
            <S.Nav>
                <S.Ul>
                    <S.link to="/">{rota1}</S.link>
                    <S.link to="/Personagens">{rota2}</S.link>
                    <S.link to="/Grifinória">{rota3}</S.link>
                    <S.link to="/Sonserina">{rota4}</S.link>
                    <S.link to="/Corvinal">{rota5}</S.link>
                    <S.link to="/Lufa-lufa">{rota6}</S.link>
                </S.Ul>
            </S.Nav>
        </div>
    )
}

export default Header;


