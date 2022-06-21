import React from "react";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";
import './Mensagem.css';

function Mensagem(){
    return (
        <div class="container">
            <BarraLateral/>
            <div class="subContainer">
                <BarraAluno/>
                <div>
                    <table>
                        <tr>
                            <th>Mensagens Recebidas</th>
                            <th>Disciplina</th>
                            <th>Situação</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Natacao</td>
                            <td>Nao visualizada</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Natacao</td>
                            <td>Visualizada</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Natacao</td>
                            <td>Nao visualizada</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Natacao</td>
                            <td>Nao visualizada</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mensagem;