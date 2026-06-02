import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="app-container">

        <aside className='sidebar-area'>
        <h2 style={{padding: '20px'}}>GrauConnect</h2>
        </aside>
        <main className='main-area'>
          <h1>dashboard da turma</h1>
          <p>Aguardando os componentes do alunos</p>
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
          gap: '20px'
        }}>
          
          <studentsCard/>
          
          </section>
        </main>
        <aside className='aside-area'>
        <h3 style={{padding: '20px'}}>Notificações</h3>
        </aside>
        
        </div>

    
  )
}

export default App
