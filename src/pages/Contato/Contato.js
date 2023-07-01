import React from "react";
import Menu from '../../components/Menu/Menu'
import Rodape from '../../components/Rodape/Rodape'
import Logo from "../../static/images/logoMenu.png"
import './Contato.css'

const Contato = () => {
    return (
        <div className="contato">
            <Menu />
            <div className="contato-container">
                <div className="container">
                    <div className="perfil">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="texto">
                        <h1>Entre em contato.</h1>
                        <p>
                            Garanhuns, PE
                            <br /><a href="mailto:leandrovictoram@gmail.com">leandrovictoram@gmail.com</a>
                            <br /><a href="tel:+5587981484518">(87) 9 8148-4518</a>
                        </p>
                        <a href="https://wa.me/5587981484518?text=Ol%C3%A1%21+Gostaria+saber+mais+sobre+seu+trabalho." target="_blank" rel="noopener noreferrer" className="button">WhatsApp</a>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Contato