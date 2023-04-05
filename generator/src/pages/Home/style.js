// importações
import styled from "styled-components";


export const Title = styled.h1`
    text-align: center;
    margin-top:8vh;
    font-size:2.8rem;

`
export const Master = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:15vh
`
export const Contanier = styled.div`
    align-items: center;
    width:80vw; 
    height:20vh;
    display: flex;
    justify-content:space-between;
    margin-top:4vw
    `

export const Box = styled.div`
    box-sizing: border-box;
    width: 230px;
    height: 350px;
    background: white;
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
`
export const Imagem = styled.img`
    width:200px;
    height: 320px;
    border-radius:6px;

`
