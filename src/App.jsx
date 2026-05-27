import { useState } from 'react'
import './App.css'
import  {Header} from './components/Header'
function App() {
  
  return (
    <div className="app-container">
      <Header/>
      <aside className='sidebar-area'>
        <h2 style={{padding:'20px'}}>GrauConnect</h2>
      </aside>
      <main className='main-area'>
        <h1>Dashboard da Turma</h1>
        <p>Aguardando componentes dos alunos</p>
      </main>
      <aside className='aside-area'>
        <h3 style={{padding:'20px'}}>Notificações</h3>
      </aside>
    </div>
  )
}

export default App
