// Importações
import React,{useState,useEffect} from 'react';
import Navbar from '../../components/navabar';
// importando estilos
import {Title, Contanier,Label,Input,Textarea,Btngenerete,Box} from './style'

// Aplicação
const Modelo1 = ()=>{
    return(
        <>  
            {/* Header da pagina */}
            <Navbar/>
            <Title>Prencha o Formulário</Title>
            <Contanier>
                {/* Formulario da pagina */}
                <Box>
                    <Label>Nome do Arquivo</Label>
                    <Input type="text" name="arquivo" />
                </Box>
                <Box>
                    <Label>Nome do Autor</Label>
                    <Input type="text" name="autor"/>
                </Box>
                <Box>
                    <Label>Titulo</Label>
                    <Input type="text" name="titulo"/>
                </Box>
                <Box>
                    <Label>Lista de Items</Label>
                    <Input type="number" name="lista" placeholder='Quantidade de Itens'/>
                </Box>
                <Box>
                    <Label>Texto</Label>
                    <Textarea name="text" rows="6" cols="6"></Textarea>
                </Box>
                <Btngenerete>Gerar Documento</Btngenerete>
            </Contanier>
            
        </>
    )
}

// exportando a função
export default Modelo1;