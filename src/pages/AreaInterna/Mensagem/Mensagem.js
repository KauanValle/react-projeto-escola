import React from "react";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";
import Formulario from "../../../components/Interno/Formulario/Formulario";
import './Mensagem.css';

class Mensagem extends React.Component {

    getDados(){
        return require('../../../jsons/mensagem.json')
    }

    render() {
        let dados = this.getDados();
        let rows = []

        for (let i = 0; i < dados.length; i++) {
            rows.push(
                <tr>
                    <td>{dados[i].mensagemRecebida}</td>
                    <td>{dados[i].materia}</td>
                    <td>{dados[i].situacao}</td>
                </tr>
            )
        }

        return (
            <div class="container">
                <BarraLateral />
                <div class="subContainer">
                    <BarraAluno />
                    <div>
                        <table>
                            <tr>
                                <th>Mensagens Recebidas</th>
                                <th>Disciplina</th>
                                <th>Situação</th>
                            </tr>
                            {rows}
                        </table>
                    </div>
                    <div class="form">
                        <Formulario />
                        <a href="#" class="myButton">Enviar mensagem</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Mensagem;