import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from "../Home/Banner";

class AreaDoAluno extends React.Component {
    render(){
        return(
            <div>
                <Navbar select="pais"/>
                <Banner 
                    titulo="AREA DOS PAIS" 
                    slogan="Aqui é a area dos pais da escola tijolinho do saber"
                    botao="Acessar area dos pais"
                    referencia="/interno-pais"
                />
            </div>
        )
    }
}

export default AreaDoAluno