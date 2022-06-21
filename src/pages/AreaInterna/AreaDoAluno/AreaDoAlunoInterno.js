import React from "react";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import './AreaDoAlunoInterno.css'
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";

import calendarIcon from '../../../components/icons/calendar.png';
import accountIcon from '../../../components/icons/account.png';
import bookClockIcon from '../../../components/icons/book-clock-outline.png';
import chatIcon from '../../../components/icons/chat.png';
import bookOpenIcon from '../../../components/icons/book-open-variant.png';
import leaveIcon from '../../../components/icons/door-closed.png';

function getDados() {

}

class AreaDoAlunoInterno extends React.Component {

    getDados() {
        return require('../../../jsons/aluno.json')
    }

    render() {
        let dados = this.getDados();
        console.log(dados)
        return (
            <div class="container1">
                <BarraLateral />
                <div class="subContainer">
                    <div class="containerCards">
                        <div class="containerInformacoes">
                            <div class="subContainerInformacoes">
                                <h3>Suas informações:</h3>
                                <p>ID: {dados.id}</p>
                                <p>NOME: {dados.nome}</p>
                                <p>EMAIL: {dados.email}</p>
                                <p>TELEFONE: {dados.telefone}</p>
                                <p>NASCIMENTO: {dados.data_nascimento}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AreaDoAlunoInterno;