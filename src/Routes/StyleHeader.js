import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 25vh;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 80%;
`
export const link = styled(Link)`
    text-decoration:none;
    font-size:1.5rem;
    color: white;
    :hover{
        transition: ease-in-out 0.5s;
        
        color: orange;
    }
`