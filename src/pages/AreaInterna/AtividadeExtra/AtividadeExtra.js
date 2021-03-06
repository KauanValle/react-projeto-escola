import React from "react";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";
import './AtividadeExtra.css'

class AtividadeExtra extends React.Component {

    getDados() {
        return require('../../../jsons/atividade_extra.json')
    }

    aprovadoReprovado(dados) {
        if (dados) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }

    render() {
        let dados = this.getDados();
        let tamanho = 0;
        let rows = []

        for (var i in dados) {
            if (dados.hasOwnProperty(i)) {
                tamanho++
            }
        }

        for (i = 0; i < tamanho; i++) {
            rows.push(
                <tr>
                    <td>{dados[i].id}</td>
                    <td>{dados[i].disciplina}</td>
                    <td>{dados[i].horasSemanais}</td>
                    <td>{dados[i].nota}</td>
                    <td>{this.aprovadoReprovado(dados[i].aprovado)}</td>
                </tr>
            )
        }

        return (
            <div class="container" >
                <BarraLateral />
                <div class="subContainer">
                    <BarraAluno />
                    <div class="areaPrincipal">
                        <div>
                            <table>
                                <tr>
                                    <th>Código</th>
                                    <th>Disciplina</th>
                                    <th>Horas Semanais</th>
                                    <th>Nota</th>
                                    <th>Aprovado</th>
                                </tr>
                                {rows}
                            </table>
                        </div>
                        <div class="adicionarMateria">
                            <label >ADICIONAR ATIVIDADE EXTRA: </label>
                            <div class="form__group">
                                <input type="text" class="form__input" id="name" placeholder="Full name" required="" />
                            </div>
                                <a href="#" class="myButton">ADICIONAR</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AtividadeExtra