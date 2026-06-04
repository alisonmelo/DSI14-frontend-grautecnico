import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { StudentCard } from './components/StudentCard';
import { alunos } from './data/alunos';
import { useState } from 'react';
import './App.css';

function App() {
const [busca, setBusca] = useState('');

const alunosFiltrados = alunos.filter(aluno => aluno.nome.toLowerCase().includes(busca.toLowerCase()));
  return (
    <div className="app-container">
      <Sidebar />
      <Header setBusca={setBusca} />
      
      <main className="main-area">
        <h1 style={{ color: 'white', marginBottom: '40px', textAlign: 'center' }}>Squad Devs</h1>
        
        {/* Usando a classe CSS que centraliza e ajusta os cards sozinha! */}
        <div className="students-grid">
          {alunosFiltrados.length > 0 ? (
           alunosFiltrados.map((aluno) => (
              <StudentCard key={aluno.id} aluno={aluno} />
            ))
          ) : (
            <p style={{ color: 'white', textAlign: 'center' }}>Nenhum aluno no banco.</p>
          )}
        </div>
      </main>

      <Aside />
    </div>
  );
}

export default App;