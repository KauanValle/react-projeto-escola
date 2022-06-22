import React from "react";
import BarraLateral from "../../../../components/Interno/BarraLateral/BarraLateral";
import BarraAluno from "../../../../components/Interno/BarraAluno/BarraAluno";
import "./AtividadeMateria.css";

class AtividadeMateria extends React.Component {

    getDados() {
        return require('../../../../jsons/atividadeMateria.json')
    }

    render() {
        let dados = this.getDados();
        let rows = [];

        for (let i = 0; i < dados.length; i++) {
            rows.push(
                <tr>
                    <td><p>{dados[i].atividade}</p><a href="#abrirModal" class="detalhes">Detalhes</a></td>
                    <td>{dados[i].nomeMateria}</td>
                    <td>{dados[i].prazo}</td>
                </tr>
            )
        }


        return (
            <div class="container">
                <BarraLateral />
                <div class="subContainer">
                    <BarraAluno />
                    <div class="areaPrincipal">
                        <table>
                            <tr>
                                <th>Atividade</th>
                                <th>Matéria</th>
                                <th>Prazo</th>
                            </tr>
                            {rows}
                        </table>

                        <div id="abrirModal" class="modal">
                            <a href="#fechar" title="Fechar" class="fechar">x</a>
                            <h2 class="titulo">Atividade 01</h2>
                            <div>
                                <p>Matéria: Matematica</p>
                                <p>Atividade para o dia: 22/06/2022</p>
                                <a href="">Download dos arquivos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AtividadeMateria;