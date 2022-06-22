import React from "react";
import BarraLateralProfessor from "../../../../components/Interno/BarraLateralProfessor/BarraLateralProfessor";
import BarraAluno from "../../../../components/Interno/BarraAluno/BarraAluno";
import './Aluno.css'

class Aluno extends React.Component {

    getDados() {
        return require('../../../../jsons/Professor/aluno.json')
    }

    render() {

        let dados = this.getDados();
        let rows = [];

        for (let i = 0; i < dados.length; i++) {
            
            rows.push(
                <tr>
                    <td>{dados[i].id}</td>
                    <td>{dados[i].nome}</td>
                    <td><a href="/interno-professor-informacoes" class="myButton">Acessar</a></td>
                </tr>
            )
        }

        console.log(dados[0]);

        

        return (
            <div class="container">
                <BarraLateralProfessor />
                <div class="subContainer">
                    <BarraAluno />
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Aluno</th>
                            <th>Informações</th>
                        </tr>
                        {rows}
                    </table>
                </div>
            </div>
        )
    }
}

export default Aluno;