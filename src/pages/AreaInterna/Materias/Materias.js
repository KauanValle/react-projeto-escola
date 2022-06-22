import React from "react";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import './Materias.css'

class Materias extends React.Component {

    getDados(){
        return require('../../../jsons/materia.json')
    }

    aprovadoReprovado(dados){
        if(dados){
            return "Aprovado"
        }else{
            return "Reprovado"
        }
    }

    render() {

        const dados = this.getDados();

        let tamanho = 0;
        let rows = []

        for(var i in dados){
            if(dados.hasOwnProperty(i)){
                tamanho++
            }
        }

        for(i = 0; i < tamanho; i++){
            rows.push(
                <tr>
                    <td>{dados[i].id}</td>
                    <td>{dados[i].nome_disciplina}</td>
                    <td>{dados[i].faltas_materia}</td>
                    <td>{dados[i].nota_total}</td>
                    <td>{this.aprovadoReprovado(dados[i].aprovado)}</td>
                </tr>
            )
        }

        return (
            <div class="container">
                <BarraLateral />
                <div class="subContainer">
                    <BarraAluno />
                    <div class="containerMaterias">
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Materia</th>
                                <th>Faltas</th>
                                <th>Nota Total</th>
                                <th>Situação</th>
                            </tr>
                            {rows}
                        </table>
                        <a href="/interno-materias-atividade" class="myButton">Visualizar atividades das matérias</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Materias;