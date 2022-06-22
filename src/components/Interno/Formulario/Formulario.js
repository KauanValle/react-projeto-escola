import React from "react";
import './Formulario.css';

class Formulario extends React.Component {
    render() {
        return (
            <div class="containerForm">
                <h3 class="tituloForm">Entre em contato!</h3>
                <div>
                    <input class="input" placeholder="Digite seu nome"></input>
                    <input class="input" placeholder="Digite seu código"></input>
                </div>
                <input class="input" placeholder="Digite seu email"></input>

                <textarea class="input textarea" placeholder="Digite aqui sua mensagem" />
            </div>
        )
    }
}

export default Formulario;