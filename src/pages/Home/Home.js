import React from "react";
import './Home.css'

import Menu from "../../components/Menu/Menu";
import FotoPrincipal from "../../static/images/FotoPrincipal.jpg"
import Container1 from "../../components/Container1/Container1";
import Container3 from "../../components/Container3/Container3";
import Rodape from "../../components/Rodape/Rodape";

const Home = () => {
    return (
        <div className="home">
            <Menu />
            <img className="foto-principal" src={FotoPrincipal} alt="Foto de uma torcida de jovens terceiranistas no Ensino Médio em seus jogos internos" width={"100%"}/>
            <Container1 />
            <Container3 />
            <Rodape />
        </div>
    )
}

export default Home