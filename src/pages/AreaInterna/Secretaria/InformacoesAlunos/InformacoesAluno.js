import React from "react";
import BarraLateralSecretaria from "../../../../components/Interno/BarraSecretaria/BarraSecretaria";
import BarraAluno from "../../../../components/Interno/BarraAluno/BarraAluno";
import './InformacoesAluno.css';

class InformacoesAluno extends React.Component{

    getDados(){
        return require('../../../../jsons/Professor/InfAlunos.json')
    }
    render(){
        let dados = this.getDados();

        return(
            <div class="container">
                <BarraLateralSecretaria/>
                <div class="subContainer">
                    <BarraAluno/>
                    <div class="areaPrincipal">
                        
                        <div class="containerInformacoes">
                            <a href="#abrirModal">Ver detalhes do aluno</a>
                        </div>

                        <table>
                            <tr>
                                <th>Bimestre</th>
                                <th>Notas</th>
                                <th>Falta</th>
                            </tr>
                            <tr>
                                <td>1 Bimestre</td>
                                <td><input value={8}></input></td>
                                <td><input value={5}></input></td>
                            </tr>
                            <tr>
                                <td>2 Bimestre</td>
                                <td><input value={10}></input></td>
                                <td><input value={0}></input></td>
                            </tr>
                            <tr>
                                <td>3 Bimestre</td>
                                <td><input value={7}></input></td>
                                <td><input value={2}></input></td>
                            </tr>
                            <tr>
                                <td>4 Bimestre</td>
                                <td><input value={9}></input></td>
                                <td><input value={0}></input></td>
                            </tr>
                        </table>

                        <a href="#" class="myButton buttonNotas">SALVAR</a>

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
                                <p>Aprovado:  {dados.aprovado}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InformacoesAluno;