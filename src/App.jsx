import { useState } from 'react'
import './App.css'
import  {Header} from './components/Header'
import { StudentCard } from './components/StudentCard'
function App() {
  
  return (
    <div className="app-container">
      <Header/>
      <aside className='sidebar-area'>
        <h2 style={{padding:'20px'}}>GrauConnect</h2>
      </aside>
      <main className='main-area' style={{color: 'white'}}>
        <h1 style={{color:'white'}}>Dashboard da Turma</h1>
        <p>Aguardando componentes dos alunos</p>
        <section style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(320px,1fr))',
          gap:'20px'
        }}>
          <StudentCard/>
        </section>
      </main>
      <aside className='aside-area'>
        <h3 style={{padding:'20px'}}>Notificações</h3>
      </aside>
    </div>
  )
}

export default App
