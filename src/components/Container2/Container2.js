import React from "react";
import { Link } from "react-router-dom"
import './Container2.css';
import FotoPrincipal from "../../static/images/JIXV23 - 3B -83-min.jpg"
// import EventoPadrao from "../../static/images/EventoPadrão.jpg"
import EnsaioFotografico from "../../static/images/EnsaioFotografico.jpg"

const Container2 = () => {

    return (
        <div className="container2">
            <div className="tipos">
                <Link className="link-tipo" to="/eventos">
                    <div className="tipo1">
                        <p>EVEN<br />TOS.</p>
                        <img className="foto-principal" src={FotoPrincipal} alt="Foto de uma torcida de jovens terceiranistas no Ensino Médio em seus jogos internos"></img>
                    </div>
                </Link>
                {/* <Link className="link-tipo" to="/padrao">
                    <div className="tipo2">
                        <p>PA<br />DRÃO.</p>
                        <img className="evento-padrao" src={EventoPadrao} alt="Foto de comemoração de chá revelação"></img>
                    </div>
                </Link> */}
                <Link className="link-tipo" to="/ensaio">
                    <div className="tipo3">
                        <p>EN<br />SA<br />IO.</p>
                        <img className="ensaio-fotografico" src={EnsaioFotografico} alt="Foto de ensaio fotografico de uma menina adolescente"></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Container2