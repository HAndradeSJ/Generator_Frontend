// Importações
import React from 'react'
import logo from "../../assets/img/fiec-logo.png";
// importando os estilos
import { Header,Buttonmodel,Buttonnew,Imagem} from "./style";

const Navbar = () => {
  return (
        <Header>
            <Imagem src={logo} alt={'logo funcioanando'} />
            <Buttonmodel>Modelos</Buttonmodel>
            <Buttonnew>Novo Modelo</Buttonnew>
        </Header>
  )
}

// exportações
export default Navbar;