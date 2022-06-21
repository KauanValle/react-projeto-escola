import React from "react";
import './Calendario.css';
import BarraAluno from "../../../components/Interno/BarraAluno/BarraAluno";
import BarraLateral from "../../../components/Interno/BarraLateral/BarraLateral";
import CalendarioJS from "../../../public/calendario.js"

function Calendario(){
    return(
        <div class="container">
            <BarraLateral/>
            <div class="subcontainer">
                <div class="calendario">
                    <BarraAluno/>
                    <div class="containerCalendario">
                        <div id="calendario"></div>
                    </div>


                    <div class="board" id="boardjsplain">
                        <div class="list">
                            <div class="card">
                                <div class="title">
                                    Meu super card
                                </div>
                                <div class="content">
                                    Content
                                </div>
                            </div>
                            <div class="card">
                                <div class="title">
                                    Meu super card
                                </div>
                                <div class="content">
                                    Content
                                </div>
                            </div>
                            <div class="card">
                                <div class="title">
                                    Meu super card
                                </div>
                                <div class="content">
                                    Content
                                </div>
                            </div>
                            <div class="card">
                                <div class="title">
                                    Meu super card
                                </div>
                                <div class="content">
                                    Content
                                </div>
                            </div>
                            <div class="card">
                                <div class="title">
                                    Meu super card
                                </div>
                                <div class="content">
                                    Content
                                </div>
                            </div>

                            <div class="card">
                                <div class="title">
                                    Meu super card
                                </div>
                                <div class="content">
                                    Content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CalendarioJS/>
        </div>
    )
}

export default Calendario
