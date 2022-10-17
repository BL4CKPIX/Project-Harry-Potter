import React,{useState, useEffect} from 'react'
import axios from 'axios'
import * as S from './StylePerso'
const Personagens = () =>{
  const [card, setCard] = useState([])

  useEffect(() =>{
    axios.get('https://hp-api.herokuapp.com/api/characters')
    .then(res =>{
      setCard(res.data)
      console.log(res)
    })
    
    .catch(err =>{
      console.log('Foi mal meu patrão', err)
    })
  }, [card])



  return(
    <S.Div>
      {card.slice(0,24).map((item,index) =>(
        <S.ContainerPerso key={index}>
        <ul>
          <li>Nome :{item.name}</li>
          <li>Especie : {item.species}</li>
          <li>Genero : {item.gender}</li>
          <li>Casa : {item.house}</li>
        </ul>
        <figure>
            <img src={item.image} alt='Todos' />
        </figure>
        </S.ContainerPerso>
      ))}
    </S.Div>
  )
}

export default Personagens;