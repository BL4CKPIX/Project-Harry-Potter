import React,{useState, useEffect} from "react";
import axios from 'axios'
import * as S from './StyleCorvinal'

const Corvinal = () =>{
    const [corvi,setCorvi] = useState([])

    useEffect(() =>{

        axios.get('https://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
        .then(res => {
            setCorvi(res.data)
        })
        .catch(error => {
            console.log('Triste mas você não foi aceito na grifinoria', error)
        })


    },[corvi])

   return(
    <S.ContainerCorvi>
        {corvi.slice(0,10).map((item, index) => (
            <S.Div key={index}>
                <li>{item.name}</li>
                <figure>
                    <img src={item.image} alt='corvinal' />
                </figure>
            </S.Div>
        ))}
    </S.ContainerCorvi>
   )
}
export default Corvinal;