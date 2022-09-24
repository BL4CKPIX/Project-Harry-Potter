import styled from "styled-components";


export const ContainerPerso = styled.div`
    display: flex;
    width: 25%;
    height: 70vh;
    align-items: center;
    flex-direction: column;

    img{
        width: 15vw;
        height: 45vh;
        :hover{
            transition: ease-in-out 0.5s ;
            border:solid 2px yellow;
        }
        
    }

    
    li{
        color:white;
        font-size: 20px;
        list-style: none;
        text-align: center;

        :hover{
            font-weight: bold;
            color:yellow;
            font-size: 25px;
        }
    }
`

export const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
`
