// Importações
import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/img/fiec-logo.png";
// importando os estilos
import { Header,Buttonmodel,Buttonnew,Imagem} from "./style";

const Navbar = () => {
  const Navigate = useNavigate()
  return (
        <Header>
            <Imagem src={logo} alt={'logo funcioanando'} onClick={()=>Navigate('/')}/>
            <Buttonmodel onClick={()=>Navigate('/meusmodelos')}>Meus Modelos</Buttonmodel>
            <Buttonnew onClick={()=>Navigate('/')}>Novo Modelo</Buttonnew>
        </Header>
  )
}

// exportações
export default Navbar;