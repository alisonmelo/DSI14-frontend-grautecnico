import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { StudentCard } from './components/StudentCard';
import { alunos } from './data/alunos';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header />
      
      <main className="main-area">
        <h1 style={{ color: 'white', marginBottom: '40px', textAlign: 'center' }}>Squad Devs</h1>
        
        {/* Usando a classe CSS que centraliza e ajusta os cards sozinha! */}
        <div className="students-grid">
          {alunos && alunos.length > 0 ? (
            alunos.map((aluno) => (
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