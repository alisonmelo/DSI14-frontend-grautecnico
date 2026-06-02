export function Aside() {
  return (
    <aside className="aside-area" style={{ 
      backgroundColor: '#09090b', 
      borderLeft: '1px solid #1e293b',
      padding: '20px',
      color: 'white'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#38bdf8', marginBottom: '10px' }}>Estatísticas</h3>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Alunos Online: 1</p>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Foco Total: 100%</p>
      </div>
      <div>
        <h3 style={{ color: '#38bdf8', marginBottom: '10px' }}>Atividades</h3>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Nenhum PR aberto ainda.</p>
      </div>
    </aside>
  );
}