import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from "../Home/Banner";

function AreaDoProfessor() {
    return (
        <div>
            <Navbar select="professor" />
            <Banner
                titulo="AREA DO PROFESSOR"
                slogan="Aqui é a area do professor da escola tijolinho do saber"
                botao="Acessar area do professor"
                referencia="/interno-professor-alunos"
            />
        </div>
    )
}

export default AreaDoProfessor;