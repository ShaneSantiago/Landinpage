import React from "react"
import Footer from "../Footer/Footer"
import Cadastro from "./Cadastro/Cadastro"
import Tabela from "./Cadastro/TabelaDeCadastro"
import { Container } from "./Styled"

const Home = () => {
    return(
        <Container>
            <div className="container">
                <div className="header">
                        <img src="assets/logo-in8-dev.svg"/>
                    <nav className="menu">
                        <ul>
                            <li>Cadastro</li>
                            <li>Lista</li>
                            <li>Sobre mim</li>
                        </ul>
                    </nav>
                </div>
                <div className="info">
                <p className="info-title">ESTÁGIO <br/><span>PROVA DE SELEÇÃO</span></p>
                </div>
            </div>
            <Cadastro />
            <Tabela />
            <Footer />
        </Container>
    )
}
export default Home