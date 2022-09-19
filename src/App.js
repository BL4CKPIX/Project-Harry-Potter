import React from "react";
import Rota from './Routes/Route'
import { createGlobalStyle } from "styled-components";
import Photo from './Img/Fundo.jpg'
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Harry Potter', sans-serif;
                                                
  }
  body{
    background-image: url(${Photo});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 100%;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Rota />      
    </div>
  );
};

export default App;
