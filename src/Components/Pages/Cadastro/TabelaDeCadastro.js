import React from "react"
import { ContainerTabela } from "./styled"

const Tabela = () => {
    return(
        <ContainerTabela>
            <div className="container-table">
                <div className="title-column">
                <h2>Lista de Cadastro</h2>
                </div>
            <table>
            
                <tr>
                    <th className="row-name"></th>
                    <th className="row-name-info">NOME</th>
                    <th className="row-name-info">EMAIL</th>
                    <th className="row-name-info">NASCIMENTO</th>
                    <th className="row-name-info">TELEFONE</th>
                </tr>
            
            
                <tr>
                    <td className="row-number">001</td>
                    <td className="row-info">Notebook i7 8GB Branco</td>
                    <td className="row-info">Informática</td>
                    <td className="row-info">Informática</td>
                    <td className="row-info">Informática</td>
                </tr>
                <tr>
                    <td className="row-number2">002</td>
                    <td className="row-info2">Caneta Esferográfica Azul</td>
                    <td className="row-info2">Papelaria</td>
                    <td className="row-info2">Informática</td>
                    <td className="row-info2">Informática</td>
                </tr>
            
        </table>
            </div>
        </ContainerTabela>
    )
}
export default Tabela