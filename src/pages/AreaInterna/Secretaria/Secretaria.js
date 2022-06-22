import React from "react";
import BarraLateral from "../../../components/Interno/BarraSecretaria/BarraSecretaria";
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";

class Secretaria extends React.Component{
    render(){
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
                        <tr>
                            <td>1</td>
                            <td>Kauan</td>
                            <td><a href="/interno-secretaria-informacoes" class="myButton">Acessar</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Secretaria;