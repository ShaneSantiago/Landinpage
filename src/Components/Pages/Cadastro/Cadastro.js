import React from "react"
import { Container } from "./styled"

const Cadastro = () => {
    return(
        <Container>
            <div className="container-form">
                <h2 className="title-cadastro">Cadastro</h2>

                <form className="form">
                <div class="label-float">
                <input type="text" placeholder=" "/>
                <label>Nome</label>
                </div>

                <div class="label-float">
                <input type="text" placeholder=" " required/>
                <label>E-mail</label>
                </div>

                <div class="label-float">
                <input type="text" placeholder=" " required/>
                <label>Nascimento</label>
                </div>

                <div class="label-float">
                <input type="text" placeholder=" " required/>
                <label>Telefone</label>
                </div>
                </form>
                <button>CADASTRAR</button>
            </div>
        </Container>
    )
}
export default Cadastro