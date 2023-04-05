// Importações
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navabar/';
import modelo1 from '../../assets/img/modelo1.png'
import modelo2 from '../../assets/img/modelo2.png';
import modelo3 from '../../assets/img/modelo3.png';
// importações de estilos
import {Title,Contanier,Master,Box,Imagem} from './style'

// Aplicação
const Home = ()=>{
    // instanciar o metodo de navegaçao
    const Navigate = useNavigate()
    return(
        <div>
            <Navbar/>
            <Title>Modelos</Title>
            <Master>
                <Contanier>
                    <Box>
                         <Imagem src={modelo1} alt={"modelo1"}onClick={()=>Navigate('/modelo1')}/>
                    </Box>
                        <Box>
                            <Imagem src={modelo2} alt={"modelo2"}onClick={()=>Navigate('/modelo2')} />
                        </Box>
                            <Box>
                                <Imagem src={modelo3} alt={"modelo3"}onClick={()=>Navigate('/modelo3')} /> 
                            </Box>
                </Contanier>
            </Master>
        </div>
    )
}

// exportando a função
export default Home;