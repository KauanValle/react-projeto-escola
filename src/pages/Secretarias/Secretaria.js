import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from "../Home/Banner";

class Secretaria extends React.Component {
    render(){
        return(
            <div>
                <Navbar select="secretaria"/>
                <Banner 
                    titulo="SECRETARIA" 
                    slogan="Aqui é a secretaria da escola tijolinho do saber"
                    botao="Acessar secretaria"
                    referencia="/interno-secretaria"
                />
            </div>
        )
    }
}

export default Secretaria