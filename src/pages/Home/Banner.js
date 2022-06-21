import React from "react";

function Banner(props) {
    return (
        <div class="areaConteudo">
            <div class="containerPrincipal">
                <div class="containerTituloPrincipal">
                    <div class="">
                        <h2>{props.titulo}</h2>
                        <p>{props.slogan}</p>
                        
                        {props.botao &&
                            <a href={props.referencia}><button class="botao">{props.botao} 	&gt;&gt; </button></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;