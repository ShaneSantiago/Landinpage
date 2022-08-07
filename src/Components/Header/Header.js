import React from "react"
import { ContainerHeader } from "./Styled"

const Header = () => {
    return(
        <ContainerHeader>
                <div>
                <nav>
                    
                    <div className="logo">
                <h2 className="logo"><img src="assets/logo-in8-dev.svg"/></h2>
                </div>
                <button>&#9776;</button>
                <ul>
                    <li>Cadastro</li>
                    <li>Liosta</li>
                    <li>Sobre mim</li>
                </ul>
            </nav>
            </div>
        </ContainerHeader>
    )
}
export default Header