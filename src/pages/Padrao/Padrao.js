import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu"
import Rodape from "../../components/Rodape/Rodape"
import './Padrao.css'

const Padrao = () => {
    return (
        <div>
            <Menu />
            <div className="padrao">
                <div className="foto">
                    <img src="" alt="" />
                </div>
                <div className="texto">
                    <h1>Antes do evento:</h1>
                    <p>
                        Durante o atendimento e reuniões realizadas antes do evento, iremos fazer o Briefing (Conjunto de informações ou uma coleta de dados passados em uma reunião para o desenvolvimento de um trabalho.) e se preparar para o evento tão esperado.
                        <br />Vou reunir suas ideias e montar um plano perfeito para ser realizado.
                        <br />Além disso, discutiremos orçamentos e quantidade de horas que irão ser usadas.
                    </p>
                </div>
                <div className="foto">
                    <img src="" alt="" />
                </div>
                <div className="texto">
                    <h1>Durante do evento:</h1>
                    <p>
                        Durante o evento, estarei de prontidão, dando o melhor para qualquer situação que venha acontecer. Caminharei junto com os convidados/participantes para ter um bom aproveitamento das horas contratadas.
                    </p>
                </div>
                <div className="foto">
                    <img src="" alt="" />
                </div>
                <div className="texto">
                    <h1>Depois do evento:</h1>
                    <p>
                        Após o evento, continuarei tirando dúvidas, dando suporte e trabalhando com você para chegarmos no resultado desejado.
                        <br />As fotos serão editadas, trabalhado com cor, iluminação, enquadramento e muito mais.
                        <br />Mesmo sendo bem cuidadas e editadas, não tem um tratamento tão completo como as do Ensaio Fotográfico Feminino. Caso queira conhecer os pacotes de ensaio, <Link className="link-texto" to="/ensaio">clique aqui</Link>.
                        <br />Logo após a pós-produção, as fotos são disponibilizadas por meio de um link para baixar.
                    </p>
                </div>
                <div className="foto">
                    <img src="" alt="" />
                </div>
                <div className="texto">
                    <h1>Como funciona o orçamento:</h1>
                    <p>
                        No cálculo, é levado em conta custos de equipamento, transporte, número de pessoas no evento, horario, entre outros.
                        <br />A chamada "Primeira Hora" é a primeira hora do evento do dia. As "Horas Adicionais" são as horas que vem logo após, essas contam com um desconto também!
                        <br />Por exemplo: O evento começa de 20h e termina de 23h. A "Primeira Hora" é das 20h ás 21h. As "Horas Adicionais" são das 21h ás 22h e das 22h ás 23h. Ou seja, será cobrado o valor da "Primeira Hora" mais duas "Horas Adicionais".
                        <br />As "Horas Adicionais" são mais baratas para que você possa ter mais tempo com menos custos.
                        <br />Saiba mais entrando em contato.
                    </p>
                    <Link className="button" to="/contato">Faça o seu orçamento!</Link>
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Padrao