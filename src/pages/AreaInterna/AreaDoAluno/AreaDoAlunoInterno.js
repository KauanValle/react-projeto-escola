import React from "react";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import './AreaDoAlunoInterno.css'
import PessoaIMG from '../../../components/icons/pessoa.png'
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";

class AreaDoAlunoInterno extends React.Component {

    getDados() {
        return require('../../../jsons/aluno.json')
    }

    render() {
        let dados = this.getDados();

        return (
            <div class="container">
                <BarraLateral />
                <div class="subContainer">
                    <BarraAluno/>
                    <div class="areaPrincipal">
                        <img src={PessoaIMG} width="400" class="imgPrincipal" alt="" />
                        <div class="containerInformacoes">
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Nome: {dados.nome}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Nascimento: {dados.data_nascimento}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Email: {dados.email}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Telefone: {dados.telefone}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default AreaDoAlunoInterno;