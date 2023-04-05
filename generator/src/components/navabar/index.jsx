// Importações
import React from 'react'
import logo from "../../assets/img/fiec-logo.png";
// importando os estilos
import { Header,Logo,Buttonmodel,Buttonnew,Img} from "./style";

const Navbar = () => {
  return (
        <Header>
          <Logo>
                <Img src={logo} alt={'logo funcioanando'} />
          </Logo>
         <Buttonmodel>Modelos</Buttonmodel>
         <Buttonnew>Novo Modelo</Buttonnew>
        </Header>
  )
}

// exportações
export default Navbar;