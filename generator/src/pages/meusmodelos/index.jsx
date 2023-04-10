// Importações
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navabar';
import Api from '../../services/api';
// importando estilos 
import {Card, Contanier,Pesquisa,Postagens, Title,Legenda,Checkbox,Label,Check,caixinha} from './style'

// Aplicação
const Modelos = ()=>{
        // Amarzendo dados pelo useState
        const [Tipodoc,settipodoc] = useState("");
        const [Usuario, Setusuario] = useState("");
       

        useEffect(()=>{
            Api.get(`/modelos?tipo_doc=${Tipodoc}&usuario=${Usuario}`)
        },[])

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
                    <Legenda>Data</Legenda>
                    <Checkbox>
                        <input type="date"/>
                    </Checkbox>   
                </Card>
                <Postagens>
                    <Title>Documentos Gerados</Title>
                    <h2>{settipodoc}</h2>
                    <h2>{Setusuario}</h2>
                </Postagens>
            </Contanier>
        </>
    )
}

// exportando a função
export default Modelos;