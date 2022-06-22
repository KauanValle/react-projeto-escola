import React from "react";
import BarraPais from "../../../components/Interno/BarraPais/BarraLateralPais";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";
class AreaDosPais extends React.Component{
    getDados(){
        return require('../../../jsons/Pais/Filho.json');
    }

    render(){
        let dados = this.getDados();
        let rows = [];

        for(let i = 0; i < dados.length; i++){
            rows.push(
                    <tr>
                        <td>{dados[i].nome}</td>
                        <td><a href="/interno-pais-filho" class="myButton">Acessar</a></td>
                    </tr>
            )
        }

        return(
            <div class="container">
                <BarraPais/>
                <div class="subContainer">
                    <BarraAluno/>
                    <div>
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Informações</th>
                            </tr>
                            {rows}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AreaDosPais