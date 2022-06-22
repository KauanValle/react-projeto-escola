import React from "react";

import accountIcon from '../../icons/user.webp';
import bookClockIcon from '../../icons/book-clock-outline.png';
import chatIcon from '../../icons/chat.png';
import bookOpenIcon from '../../icons/book-open-variant.png';
import leaveIcon from '../../icons/arrow-left-box.png';

function BarraLateralPais() {
    return (
        <div class="barraLateral">
            <div>
                <a href="/interno-pais">
                    <img src={accountIcon} width="100" alt="" />
                </a>
            </div>
            <div>
                <a href="/interno-extra">
                    <div class="menuIcon">
                        <img width="40" src={bookClockIcon} alt="" />
                        <p>Atividade Extra</p>
                    </div>
                </a>
                <a href="/interno-mensagem">
                    <div class="menuIcon">
                        <img width="40" src={chatIcon} alt="" />
                        <p>Chat</p>
                    </div>
                </a>
                <a href="/interno-materias">
                    <div class="menuIcon">
                        <img width="40" src={bookOpenIcon} alt="" />
                        <p>Matérias</p>
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

export default BarraLateralPais;