import React from "react";
import BarraLateral from "../../../components/Interno/BarraSecretaria/BarraSecretaria";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";

class Secretaria extends React.Component{

    getDados(){
        return require('../../../jsons/Secretaria/aluno.json')
    }

    render(){
        let dados = this.getDados();
        let rows = [];

        for(let i = 0; i < dados.length; i++){
            rows.push(
                <tr>
                    <td>{dados[i].id}</td>
                    <td>{dados[i].nome}</td>
                    <td><a href="/interno-secretaria-informacoes" class="myButton">Acessar</a></td>
                </tr>
            )
        }

        return(
            <div class="container">
                <BarraLateral/>
                <div class="subContainer">
                    <BarraAluno/>
                    <table>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Informações</th>
                        </tr>
                        {rows}
                    </table>
                </div>
            </div>
        )
    }
}

export default Secretaria;