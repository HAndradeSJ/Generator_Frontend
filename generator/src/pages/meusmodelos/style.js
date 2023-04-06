import styled from "styled-components";

export const Contanier = styled.div`
     display:flex;
     flex-direction:space-between;
     margin-top:6vh;

`
export const Card = styled.div`
    width:14vw;
    margin-left:2vw;
    height:84vh;
    display:flex;
    flex-direction:column;
    align-items:left;

`
export const Pesquisa = styled.input`
    width: 200px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 1rem;
    font-weight:bold;
    border: 2px solid transparent;
    border-radius: 8px;
    margin-top:4vh;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: .3s ease;
`
export const Filtros = styled.div`
    display:flex;
    flex-direction: column;

`

export const Postagens = styled.div`
    margin-top:2vw;
    margin-left:8vw;
    width:70vw;
    height:60vh;
    padding: 1rem;
    cursor: pointer;
    border-radius:0.75rem;
    background: #f1f1f3;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
    position: relative;
`

export const Title = styled.h1`
    text-align:left;
    margin-left:1vw;
    font-size:1.80rem;
    font-weight:bold;
`

export const Legenda = styled.legend`
    margin-top:2vw;
    font-weight:bold;
    margin-left:1vw;
`
export const Checkbox = styled.div`
    margin-top:1vw;
    margin-left:1vw;
    display:flex;
    flex-direction:column;
    padding:2;
    width:200px;
    height:200px;   
`

export const Label = styled.label`
    margin-left:16px;
    font-weight:bold;
`
export const Check = styled.input`
    height:20px;
    width:20px;
    background-color:#eee;
    
`