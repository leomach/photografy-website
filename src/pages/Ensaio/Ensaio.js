import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu"
import Rodape from "../../components/Rodape/Rodape"
import Ensaio1 from "../../static/images/ensaio (1).jpg"
import Ensaio2 from "../../static/images/ensaio (2).png"
import Ensaio3 from "../../static/images/ensaio (3).png"
import Ensaio4 from "../../static/images/ensaio (4).jpg"
import Ensaio5 from "../../static/images/ensaio (5).jpg"
import Ensaio6 from "../../static/images/ensaio (6).jpg"
import Ensaio7 from "../../static/images/ensaio (7).jpg"
import Ensaio8 from "../../static/images/ensaio (8).jpg"
import Ensaio9 from "../../static/images/ensaio (9).jpg"
import Ensaio10 from "../../static/images/ensaio (10).jpg"
import Ensaio11 from "../../static/images/ensaio (11).jpg"
import Ensaio12 from "../../static/images/ensaio (12).jpg"
import Ensaio13 from "../../static/images/ensaio (13).jpg"
import Ensaio14 from "../../static/images/ensaio (14).jpg"
import Ensaio15 from "../../static/images/ensaio (15).jpg"
import Ensaio16 from "../../static/images/ensaio (16).jpg"
import './Ensaio.css'

const Ensaio = () => {
    return (
        <div>
            <Menu />
            <div className="ensaio">
                <div className="foto">
                    <img src={Ensaio3} alt="" />
                    <img src={Ensaio2} alt="" />
                    <img src={Ensaio1} alt="" />
                    <img src={Ensaio4} alt="" />
                </div>
                <div className="texto">
                    <h1>Antes do ensaio:</h1>
                    <p>
                        Durante o atendimento que acontece antes do ensaio, vou te conhecer. Saber o que você gosta ou não, se você é muito tímida ou extrovertida... Enfim, saber sobre sua personalidade. Isso vai nos ajudar bastante a fazer um ensaio incrível em que você se sentirá bem consigo mesma!
                        <br />Além disso, vou te falar como você ou sua maquiadora devem fazer a make. É isso mesmo, tem make especifica pra ensaio fotográfico!
                        <br />E como se não bastasse, vou escolher contigo quais roupas usar. Cores, modelos e caimento importam muito nas fotos.
                        <br />Ah, só mais uma coisa, os lugares a gente vê junto também. Ou seja, relaxa, você não fará nada sozinha. Não precisa ser uma modelo pra ser fotografada.
                    </p>
                </div>
                <div className="foto">
                    <img src={Ensaio5} alt="" />
                    <img src={Ensaio6} alt="" />
                    <img src={Ensaio7} alt="" />
                    <img src={Ensaio8} alt="" />
                </div>
                <div className="texto">
                    <h1>Durante do ensaio:</h1>
                    <p>
                        Durante o ensaio, vou te guiar em todas as poses que você não souber fazer. Deixa as ideias comigo, relaxa! Sabe aquele jeito de modelo que você vê nas fotos? Você também pode ter!
                        <br />As roupas que escolhemos irão ter momento certo pra usa-las, por causa de cores e ambientação, e eu vou te ajudar nisso também.
                        <br />Você pode ficar a vontade pra levar quem quiser pra te dar uma forcinha durante o ensaio. Eu vou ter total respeito em relação a toque e aquela sua amiga pode ajeitar aquele seu cabelo que não ta certinho ou a roupa meio dobrada.
                        <br />Essa vai ser a melhor experiencia!
                    </p>
                </div>
                <div className="foto">
                    <img src={Ensaio9} alt="" />
                    <img src={Ensaio10} alt="" />
                    <img src={Ensaio11} alt="" />
                    <img src={Ensaio12} alt="" />
                </div>
                <div className="texto">
                    <h1>Depois do ensaio:</h1>
                    <p>
                        Após o ensaio, você escolhe as fotos de acordo com a quantidade do seu pacote. Caso queira alguma a mais, não tem problema, cada foto tem um valor adicional. Mas presta atenção, quanto maior for o pacote que você adquirir, mais barato fica as adicionais depois.
                        <br />As fotos são EDITADAS com muito carinho! Em cada foto, se leva por volta de 30min para fazer toda a correção de cores, objetos em cena, tratamento de pele e muito mais.
                        <br />Elas são entregue em meio digital com alta qualidade!
                    </p>
                </div>
                <div className="foto">
                    <img src={Ensaio13} alt="" />
                    <img src={Ensaio14} alt="" />
                    <img src={Ensaio15} alt="" />
                    <img src={Ensaio16} alt="" />
                </div>
                <div className="texto">
                    <h1>Porque me escolher:</h1>
                    <p>
                        Você já ouviu falar em tratamento de pele na fotografia? Não tem nada a ver com aquelas aberrações de distorção que tem por ai na internet. No tratamento que eu faço, vou tirar manchas da sua pele e as que são feitas pela própria câmera que são indesejadas (e só as indesejadas!), vou tirar aquela espinha ou qualquer outra imperfeição sem deixar você irreal. Tenho cursos de edição profissionalizantes e vou deixar você LINDA.
                        <br />Tenho 6 anos de esperiencia no audiovisual, trabalhando com diversos tipos de fotografia e vídeo.
                        <br />Só fica atenta: com um trabalho com tanta qualidade, você vai mesmo ir pro fotografo meia boca??
                        <br />Aah! E caso você esteja precisando de fotos, mas não tem muito dinheiro pra gastar, chama um(a) amigo(a)! Aqui vocês podem dividir o pacote!
                    </p>
                    <Link className="button" to="/contato">Faça o seu orçamento!</Link>
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Ensaio