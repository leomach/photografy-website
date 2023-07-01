import React from "react";
import Container2 from "../../components/Container2/Container2";
import Menu from "../../components/Menu/Menu";
import Rodape from "../../components/Rodape/Rodape";
import './Fotografia.css';

const Fotografia = () => {
    return (
        <div className="fotografia">
            <Menu />
            <div className="titulo-fotografia">
                <div className="texto">
                    <h1>Escolha um tipo de fotografia.</h1>
                    <p>Você pode escolher entre evento padrão e estudantil. Além dos ensaios femininos.</p>
                </div>
            </div>
            <Container2 />
            <Rodape />
        </div>
    )
}

export default Fotografia