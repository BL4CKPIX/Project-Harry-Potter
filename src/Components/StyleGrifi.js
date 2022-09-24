import styled from "styled-components";

export const ContainerGrifi = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 10vh;
    

    h2{
        position: absolute;
        top: 17%;
        right: 40%;
        color: cyan;
        :hover{
            font-size: 1.6rem;
        }
    }
`

export const Div = styled.div`
    display: flex;
    height:  65vh;
    flex-direction: column;
    align-items: center;
    width: 20%;
    color: white;

    img{
        width: 15vw;
        height: 45vh;
    }
` 