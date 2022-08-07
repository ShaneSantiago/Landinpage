import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../Services/Url"
import { ContainerTabela } from "./Styled"

const Tabela = () => {
    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        listaDeCadastro()
    }, [])

    const listaDeCadastro = () => {
        axios.get(`${BASE_URL}/all`)
        .then((res) => {
            setCadastros(res.data.allUsers)
            console.log(res.data)
        })
        .catch((erro) => {
            console.log(res.data)
        })
    }
    return(
        <ContainerTabela>
            <div className="container-table">
                <div className="title-column">
                <h2>Lista de Cadastro</h2>
                </div>
                <div className="table">
                {cadastros.map((item, index) => {
                return <table>
            
                <tr>
                    <th className="row-name"></th>
                    <th className="row-name-info">NOME</th>
                    <th className="row-name-info">EMAIL</th>
                    <th className="row-name-info">NASCIMENTO</th>
                    <th className="row-name-info">TELEFONE</th>
                </tr>
            
            
                <tr>
                    <td className="row-number">{index +1}</td>
                    <td className="row-info">{item.nome}</td>
                    <td className="row-info">{item.email}</td>
                    <td className="row-info">{item.nascimento}</td>
                    <td className="row-info">{item.telefone}</td>
                </tr>
                
        </table>
            })}
            
        </div>
            </div>
        </ContainerTabela>
    )
}
export default Tabela