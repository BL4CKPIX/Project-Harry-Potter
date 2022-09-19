import React,{useState, useEffect} from 'react'
import axios from 'axios'
import * as S from './StylePerso'
const Personagens = () =>{
  const [card, setCard] = useState([])

  useEffect(() =>{
    axios.get('http://hp-api.herokuapp.com/api/characters')
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
      {card.map((item) =>(
        <S.ContainerPerso>
        <ul>
          <li>{item.name}</li>
        </ul>
        <figure>
            <img src={item.image} />
        </figure>
        </S.ContainerPerso>
      ))}
    </S.Div>
  )
}

export default Personagens;