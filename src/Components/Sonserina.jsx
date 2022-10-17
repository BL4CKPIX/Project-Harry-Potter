import React,{useState, useEffect} from "react";
import axios from 'axios'
import * as S from './StyleSonse'

const Sonserina = () =>{
    const [sonse,setSonse] = useState([])

    useEffect(() =>{

        axios.get('https://hp-api.herokuapp.com/api/characters/house/Slytherin')
        .then(res => {
            setSonse(res.data)
        })
        .catch(error => {
            console.log('Triste mas você não foi aceito na grifinoria', error)
        })


    },[sonse])

   return(
    <S.ContainerSonse>
        {sonse.slice(0,10).map((item, index) => (
            <S.Div key={index}>
                <li>{item.name}</li>
                <figure>
                    <img src={item.image} alt='Sonserina' />
                </figure>
            </S.Div>
        ))}
    </S.ContainerSonse>
   )
}
export default Sonserina;