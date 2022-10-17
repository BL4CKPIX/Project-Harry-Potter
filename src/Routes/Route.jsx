import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from '../Components/Home'
import Personagens from '../Components/Personagens'
import Griforia from '../Components/Grifinória'
import Sonserina from '../Components/Sonserina'
import Corvinal from '../Components/Corvinal'
import LufaLufa from '../Components/LufaLufa'

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Header rota1="Home" rota2="Personagens" rota3="Grifinória" rota4="Sonserina" rota5="Corvinal" rota6="Lufa-lufa" />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Personagens' element={<Personagens />} />
                <Route path='/Grifinória' element={<Griforia />} />
                <Route path='/Sonserina' element={<Sonserina/>} />
                <Route path='/Corvinal' element={<Corvinal/>} />
                <Route path='/Lufalufa' element={<LufaLufa/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;