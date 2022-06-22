import React from "react";
import BarraLateral from "../../../../components/Interno/BarraSecretaria/BarraSecretaria";
import BarraAluno from "../../../../components/Interno/BarraAluno/BarraAluno";
import './Mensagem.css';

class Mensagem extends React.Component {

    getDados(){
        return require('../../../../jsons/Secretaria/mensagem.json')
    }

    render() {
        let dados = this.getDados();
        let rows = []

        for (let i = 0; i < dados.length; i++) {
            rows.push(
                <tr>
                    <td>{dados[i].mensagemRecebida}</td>
                    <td>{dados[i].materia}</td>
                    <td>{dados[i].nome}</td>
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
                                <th>Aluno</th>
                                <th>Situação</th>
                            </tr>
                            {rows}
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Mensagem;