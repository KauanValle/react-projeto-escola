import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AreaDoAluno from './pages/AreaDoAluno/AreaDoAluno';
import Login from './components/Login/Login'
import AreaDoAlunoInterno from './pages/AreaInterna/AreaDoAluno/AreaDoAlunoInterno';
import AtividadeExtra from './pages/AreaInterna/AtividadeExtra/AtividadeExtra';
import Mensagem from './pages/AreaInterna/Mensagem/Mensagem';
import Materias from './pages/AreaInterna/Materias/Materias';

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home/> } exact />
                <Route path="/area-aluno" element={<AreaDoAluno/>} />
                <Route path="/area-professor" element={<AreaDoAluno/>} />
                <Route path="/area-pais" element={<AreaDoAluno/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/interno-aluno" element={<AreaDoAlunoInterno/>} />
                <Route path="/interno-extra" element={<AtividadeExtra/>} />
                <Route path="/interno-mensagem" element={<Mensagem/>} />
                <Route path="/interno-materias" element={<Materias/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;