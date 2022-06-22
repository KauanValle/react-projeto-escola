import React from "react";

import alunosIcon from '../../icons/account-multiple.png'
import calendarIcon from '../../icons/calendar.png';
import accountIcon from '../../icons/user.webp';
import chatIcon from '../../icons/chat.png';
import leaveIcon from '../../icons/arrow-left-box.png';

function BarraLateralProfessor() {
    return (
        <div class="barraLateral">
            <div>
                <a href="/interno-professor-alunos">
                    <img src={accountIcon} width="100" alt="" />
                </a>
            </div>
            <div>

                <a href="/interno-professor-alunos">
                    <div class="menuIcon">
                        <img width="40" src={alunosIcon} alt="" />
                        <p>Alunos</p>
                    </div>
                </a>

                <a href="/interno-professor-atividades">
                    <div class="menuIcon">
                        <img width="40" src={calendarIcon} alt="" />
                        <p>Calendário</p>
                    </div>
                </a>

                <a href="/interno-professor-mensagem">
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

export default BarraLateralProfessor;