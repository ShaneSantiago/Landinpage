import axios from "axios"
import React, { useState } from "react"
import useForm from "../../Hooks/useForm"
import { BASE_URL } from "../../Services/Url"
import { Container } from "./styled"

const Cadastro = () => {
    const [form, onChange, clear] = useForm({
        nome: "",
        email: "",
        nascimento: "",
        telefone: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        cadastro()
    }

    const cadastro = () => {
        axios.post(`${BASE_URL}/create`, form)
        .then((res) => {
            alert("Cadastro realizado com sucesso")
        })
        .catch((erro) => {
            console.log(erro)
        })
    }
    return(
        <Container>
            <div className="container-form">
                <h2 className="title-cadastro">Cadastro</h2>

                <form onSubmit={onSubmitForm} className="form">
                <div class="label-float">
                <input 
                type="name"
                name="nome"
                value={form.nome}
                onChange={onChange}
                required
                placeholder=""/>
                <label>Nome</label>
                </div>

                <div class="label-float">
                <input 
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder=" " 
                required/>
                <label>E-mail</label>
                </div>

                <div class="label-float">
                <input 
                type="date"
                name="nascimento"
                value={form.nascimento}
                onChange={onChange}
                placeholder=" "
                required/>
                <label>Nascimento</label>
                </div>

                <div class="label-float">
                <input 
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={onChange}
                placeholder=" " 
                required/>
                <label>Telefone</label>
                </div>
                <button type="submit">CADASTRAR</button>
                </form>
            </div>
        </Container>
    )
}
export default Cadastro