import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from "../Home/Banner";

class AreaDoAluno extends React.Component {
    render(){
        return(
            <div>
                <Navbar select="aluno"/>
                <Banner 
                    titulo="AREA DO ALUNO" 
                    slogan="Aqui é a area do aluno da escola tijolinho do saber"
                    botao="Acessar area do aluno"
                    referencia="/interno-aluno"
                />
            </div>
        )
    }
}

export default AreaDoAluno