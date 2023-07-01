import React from "react";
import './Rodape.css'

const Rodape = () => {
    return (
        <div className="rodape">
            <div className="estrutura">
                <div className="texto">
                    <p>Estou te esperando! Entre em contato pelo número ao lado.</p>
                </div>
                <div className="contato">
                    <h5>(87) 9 8148-4518</h5>
                    <a href="https://wa.me/5587981484518?text=Ol%C3%A1%21+Gostaria+saber+mais+sobre+seu+trabalho." target="_blank" rel="noopener noreferrer">Ou vá direto para o WhatsApp!</a>
                </div>
            </div>
        </div>
    )
}

export default Rodape