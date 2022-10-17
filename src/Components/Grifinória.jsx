import React,{useState, useEffect} from "react";
import axios from 'axios'
import * as S from './StyleGrifi'

const Grifinoria = () =>{
    const [grifi,setGrifi] = useState([])

    useEffect(() =>{
        axios.get('https://hp-api.herokuapp.com/api/characters/house/gryffindor')
        .then(res => {
            setGrifi(res.data)
        })
        .catch(error => {
            console.log('Triste mas você não foi aceito na grifinoria', error)
        })


    },[grifi])

   return(
    <S.ContainerGrifi>
        <h2>Seja Bem vindo A Casa Grifinoria</h2>
        {grifi.slice(0,10).map((item, index) => (
            <S.Div key={index}>
                <li>{item.name}</li>
                <figure>
                    <img src={item.image} alt='Grifinoria' />
                </figure>
            </S.Div>
        ))}
    </S.ContainerGrifi>
   )
}
export default Grifinoria;