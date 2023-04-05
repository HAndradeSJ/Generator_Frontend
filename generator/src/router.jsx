// importações
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

    // importandos meus componets 
    import Home from "./pages/Home"
    import Modelos from "./pages/meusmodelos"
    import Modelo1 from "./pages/modelo1"
    import Modelo2 from "./pages/modelo2"
    import Modelo3 from "./pages/modelo3"
 
    // APP onde as rotas vai rodar
    const routes = ()=>{
        return (
            // definindo minhas rotas
            <BrowserRouter>
                <Routes>
                    {/* minhas rotas */}
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/meusmodelos"} element={<Modelos/>}/>
                    <Route path={"/modelo1"} element={<Modelo1/>}/>
                    <Route path={"/modelo2"} element={<Modelo2/>}/>
                    <Route path={"/modelo3"} element={<Modelo3/>}/>
                </Routes>
            </BrowserRouter>
        )
    }

// exportando a constante da rota
export default routes;