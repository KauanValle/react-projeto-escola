import React from "react";
import './BarraLateral.css';
import calendarIcon from '../../icons/calendar.png';
import accountIcon from '../../icons/account.png';
import bookClockIcon from '../../icons/book-clock-outline.png';
import chatIcon from '../../icons/chat.png';
import bookOpenIcon from '../../icons/book-open-variant.png';
import leaveIcon from '../../icons/door-closed.png';
function BarraLateral(){
    return(
        <div class="barraLateral">
        <div class="menuIcon">
            <a href="/interno-aluno">
                <img width="40" src={accountIcon} title="Area Principal" alt=""/>
            </a>
        </div>
        <div class="menuIcon">
            <a href="#">
                <img width="40" src={calendarIcon} title="Calendário" alt=""/>
            </a>
        </div>
        <div class="menuIcon">
            <a href="/interno-extra">
                <img width="40" src={bookClockIcon} title="Atividade Extra" alt=""/>
            </a>
        </div>
        <div class="menuIcon">
            <a href="/interno-mensagem">
                <img width="40" src={chatIcon} title="Chat" alt=""/>
            </a>
        </div>
        <div class="menuIcon">
            <a href="/interno-materias">
                <img width="40" src={bookOpenIcon} title="Matérias" alt=""/>
            </a>
        </div>
        <div class="menuIcon">
            <a href="/">
                <img width="40" src={leaveIcon} title="Sair" alt=""/>
            </a>
        </div>
    </div>
    )
}

export default BarraLateral;