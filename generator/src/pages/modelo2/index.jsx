// Importações
import React from 'react';
import Navbar from '../../components/navabar';
// importando estilos
import {Title, Contanier,Label,Input,Textarea,Btngenerete,Box} from './style'

// Aplicação
const Modelo2 = ()=>{
    return(
        <>  
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
                    <Label>Texto</Label>
                    <Textarea name="text" rows="6" cols="6"></Textarea>
                </Box>
                <Box>
                    <Label>Subtítulo</Label>
                    <Input type="text" name="subtitulo"/>
                </Box>
                <Box>
                    <Label>Texto</Label>
                    <Textarea name="subtext" rows="6" cols="6"></Textarea>
                </Box>
                <Btngenerete>Gerar Documento</Btngenerete>
            </Contanier>
        </>
    )
}

// exportando a função
export default Modelo2;