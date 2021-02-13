import React from 'react';
import './App.css';

import Usuarios from './components/Usuarios/Usuarios'

function App() {
  return (
    <div className="App">
      <header>
        <nav className="Menu">
          <ul>
            <li><a href='/'>Início</a></li>
            <li><a href='/usuarios'>Usuários Cadastrados</a></li>
            <li><a href='/adicionar'>Adicionar Usuário</a></li>
          </ul>         
        </nav>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
  );
}

export default App;