import React from "react";
import BarraLateralProfessor from "../../../../components/Interno/BarraLateralProfessor/BarraLateralProfessor";
import BarraAluno from "../../../../components/Interno/BarraAluno/BarraAluno";
import './CadastroAtividades.css';

class CadastroAtividades extends React.Component {
    render() {
        return (
            <div class="container">
                <BarraLateralProfessor />
                <div class="subContainer">
                    <BarraAluno />
                    <div class="containerForm">
                        <h3 class="tituloForm">Cadastre uma atividade</h3>
                        <div>
                            <input class="input" placeholder="Nome da atividade"></input>
                            <input class="input" placeholder="Prazo de entrega"></input>
                        </div>
                        <textarea class="input textarea" placeholder="Descrição atividade" />
                        <input type="file"></input>
                        <a href="#" class="myButton buttonNotas">ADICIONAR</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroAtividades;