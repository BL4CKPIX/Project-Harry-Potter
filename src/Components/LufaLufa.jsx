import React,{useState, useEffect} from "react";
import axios from 'axios'
import * as S from './StyleLufa'

const lufaLufa = () =>{
    const [lufa,setLufa] = useState([])

    useEffect(() =>{

        axios.get('https://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
        .then(res => {
            setLufa(res.data)
        })
        .catch(error => {
            console.log('Triste mas você não foi aceito na grifinoria', error)
        })


    },[lufa])

   return(
    <S.ContainerLufa>
        {lufa.slice(0,10).map((item, index) => (
            <S.Div key={index}>
                <li>{item.name}</li>
                <figure>
                    <img src={item.image} alt='Lufa' />
                </figure>
            </S.Div>
        ))}
    </S.ContainerLufa>
   )
}
export default lufaLufa;