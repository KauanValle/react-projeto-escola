import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import './style.css'
import Banner from './Banner'

class AreaDoInicio extends React.Component{
    render(){
        return(
            <div class="teste">
                <Navbar select="home"/>
                <Banner 
                    titulo="BEM-VINDO AO TIJOLINHO DO SABER" 
                    slogan="Uma escola moderna, perfeita e ideal para seu filho! Venha com a gente :)"
                />
            </div>
        )
    }
}

export default AreaDoInicio