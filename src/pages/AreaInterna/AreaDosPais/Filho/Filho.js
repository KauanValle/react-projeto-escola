import React from "react";
import BarraLateralPais from "../../../../components/Interno/BarraPais/BarraLateralPais";
import BarraAluno from "../../../../components/Interno/BarraAluno/BarraAluno";

class Filho extends React.Component{
    getDados(){
        return require('../../../../jsons/Pais/Informacoes/Filho.json')
    }

    getDadosMaterias(){
        return require('../../../../jsons/Pais/Materias.json')
    }
    
    render(){
        let dados = this.getDados()
        let materias = this.getDadosMaterias();

        let rows = []

        for (let i = 0; i < materias.length; i++) {
            rows.push(
                
                            <tr>
                                <td>{materias[i].id}</td>
                                <td>{materias[i].nome_disciplina}</td>
                                <td>{materias[i].faltas_materia}</td>
                                <td>{materias[i].nota_total}</td>
                                <td>{materias[i].aprovado}</td>
                            </tr>

  
            )
        }

        return(
            <div class="container">
                <BarraLateralPais/>
                <div class="subContainer">
                    <BarraAluno/>
                    <div class="containerMaterias">
                        <table>
                            <tr>
                                <th>Código</th>
                                <th>Materia</th>
                                <th>Faltas</th>
                                <th>Nota Total</th>
                                <th>Situação</th>
                            </tr>
                            {rows}
                        </table>
                    </div>
                    
                        
                        
 
                    <p><a href="#abrirModal">Ver detalhes</a></p>
                    <div id="abrirModal" class="modal">
                            <a href="#fechar" title="Fechar" class="fechar">x</a>
                            <h2 class="titulo">Informações</h2>
                            <div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Código: {dados.id}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Nome: {dados.nome}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Nascimento:  {dados.nascimento}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Email:  {dados.email}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <p>Telefone:  {dados.telefone}</p>
                            </div>
                            <div class="informacoes">
                                <span class="flecha">=={'>'}</span>
                                <a href="https://upload.wikimedia.org/wikipedia/commons/c/c7/BoletoBancario.png" target="_blank">Download do boleto</a>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Filho;