// Importação
import styled from "styled-components";

//  Definindo estilios com styled
export const Header = styled.header`
    background-color:black;
    width:100%;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const Logo = styled.div`
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Buttonnew = styled.button`
    border:none;
    width:7vw;
    height:5vh;
    background-color:white;
    color:black;
    border-radius:100px;
`
export const Buttonmodel = styled.button`
    border:none;
    width:7vw;
    height:5vh;
    background-color:white;
    color:black;
    border-radius:100px;
`

export const Imagem = styled.img`
    object-fit: cover;
    height: 45%;
    margin-top: 0.4rem;
`
