// Importações
import React from 'react';
import Navbar from '../../components/navabar';
// importando estilos 
import {Card, Contanier,Pesquisa,Postagens, Title,Legenda,Checkbox,Label,Check,caixinha} from './style'

// Aplicação
const Modelos = ()=>{
    return(
        <>
            <Navbar/>
            <Contanier>
                <Card>
                    <Pesquisa type="search" placeholder='Pesquisar....'/>
                    <Legenda>Modelos</Legenda>
                    <Checkbox>
                        <caixinha>
                            <Check type="checkbox" id="modelo1" name="modelo1"/>
                            <Label for="modelo1">Modelo 1</Label>
                        </caixinha>
                        <caixinha>
                            <Check type="checkbox" id="modelo1" name="modelo1"/>
                            <Label for="modelo1">Modelo 1</Label>
                        </caixinha>
                        <caixinha>
                            <Check type="checkbox" id="modelo3" name="modelo3"/>
                             <Label for="modelo1">Modelo 3</Label>
                        </caixinha>
                    </Checkbox>
                </Card>
                <Postagens>
                    <Title>Documentos Gerados</Title>
                </Postagens>
            </Contanier>
        </>
    )
}

// exportando a função
export default Modelos;