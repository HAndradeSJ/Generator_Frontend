// importação do styled
import styled from "styled-components";

export const Title = styled.h1`
    text-align:left;
    margin-left:5vw;
    margin-top:10vh;
    font-size:1.50rem;
`
export const Contanier = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:left;
    width:60vw;
    align-items:left;
    margin-left:4vw;
    margin-top:3vh;
`
export const Label = styled.label`
    font-size: 100%;
    color: rgb(100, 100, 100);
    font-weight: bold;
    margin-left: 1vh;
`
export const  Input = styled.input`
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 12px;
    width:50%;
    font-weight: bold;
    height:6vh;
    cursor: pointer;
    
`
export const Textarea = styled.textarea`
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 12px;
    width:50%;
    font-weight: bold;
    height:8vh;
    cursor: pointer;
    

`
export const Btngenerete = styled.button`  
    transition: all 0.2s ease-in;
    margin-top:3vh;
    margin-left:0.50vw;
    width:25%;
    color: white;
    padding: 0.7em 1.7em;]
    font-weight: bold;
    font-size: 18px;
    border-radius: 0.5em;
    background:#212529;
    border: 1px solid #e8e8e8;
    box-shadow: 6px 6px 12px #c5c5c5,
            -6px -6px 12px #ffffff;
    cursor: pointer;

`

export const Box = styled.div`
    padding:8px;
    display:flex;
    flex-direction: column;
`
export const Master = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`
