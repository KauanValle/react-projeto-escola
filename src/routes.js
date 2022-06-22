import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AreaDoAluno from './pages/AreaDoAluno/AreaDoAluno';
import Login from './components/Login/Login'
import AreaDoAlunoInterno from './pages/AreaInterna/AreaDoAluno/AreaDoAlunoInterno';
import AreaDoProfessor from './pages/AreaDoProfessor/AreaDoProfessor';
import AtividadeExtra from './pages/AreaInterna/AtividadeExtra/AtividadeExtra';
import Mensagem from './pages/AreaInterna/Mensagem/Mensagem';
import Materias from './pages/AreaInterna/Materias/Materias';
import AtividadeMateria from './pages/AreaInterna/Materias/AtividadeMateria/AtividadeMateria';
import Alunos from './pages/AreaInterna/AreaDosProfessores/Alunos/Alunos';
import InformacoesAluno from './pages/AreaInterna/AreaDosProfessores/Alunos/InformacoesAluno';
import MensagemProfessor from './pages/AreaInterna/AreaDosProfessores/Mensagem/Mensagem'
import CadastroAtividades from './pages/AreaInterna/AreaDosProfessores/CadastroAtividades/CadastroAtividades';
import Secretaria from './pages/AreaInterna/Secretaria/Secretaria';
import AreaSecretaria from './pages/Secretarias/Secretaria'
import InformacoesAlunoSecret from './pages/AreaInterna/AreaDosProfessores/Alunos/InformacoesAluno';

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home/> } exact />
                <Route path="/area-aluno" element={<AreaDoAluno/>} />
                <Route path="/area-professor" element={<AreaDoProfessor/>} />
                <Route path="/area-pais" element={<AreaDoAluno/>} />
                <Route path="/secretaria" element={<AreaSecretaria/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/interno-aluno" element={<AreaDoAlunoInterno/>} />
                <Route path="/interno-extra" element={<AtividadeExtra/>} />
                <Route path="/interno-mensagem" element={<Mensagem/>} />
                <Route path="/interno-materias" element={<Materias/>} />
                <Route path="/interno-materias-atividade" element={<AtividadeMateria/>} />
                <Route path="/interno-professor-alunos" element={<Alunos/>} />
                <Route path="/interno-professor-informacoes" element={<InformacoesAluno/>} />
                <Route path="/interno-professor-mensagem" element={<MensagemProfessor/>} />
                <Route path="/interno-professor-atividades" element={<CadastroAtividades/>} />
                <Route path="/interno-secretaria" element={<Secretaria/>} />
                <Route path="/interno-secretaria-informacoes" element={<InformacoesAlunoSecret/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;