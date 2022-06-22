import React from "react";
import './BarraSecretaria.css';


import accountIcon from '../../icons/user.webp';
import pessoaIcon from '../../icons/account-multiple.png';
import chatIcon from '../../icons/chat.png';
import leaveIcon from '../../icons/arrow-left-box.png';
function BarraLateral() {
    return (
        <div class="barraLateral">
            <div>
                <a href="/interno-secretaria">
                    <img src={accountIcon} width="100" alt="" />
                </a>
            </div>
            <div>
                <a href="/interno-secretaria">
                    <div class="menuIcon">
                        <img width="40" src={pessoaIcon} alt="" />
                        <p>Alunos</p>
                    </div>
                </a>
                
                <a href="/interno-secretaria-mensagem">
                    <div class="menuIcon">
                        <img width="40" src={chatIcon} alt="" />
                        <p>Chat</p>
                    </div>
                </a>
               
                <a href="/">
                    <div class="menuIcon">
                        <img width="40" src={leaveIcon} alt="" />
                        <p>Sair</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BarraLateral;