export function Sidebar() {
  return (
    <aside className="sidebar-area" style={{ 
      backgroundColor: '#09090b', 
      borderRight: '1px solid #1e293b',
      padding: '20px',
      color: 'white'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>
        Grau<span style={{ color: '#38bdf8' }}>Connect</span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a href="#" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</a>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Turma</a>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Aulas</a>
      </nav>
    </aside>
  );
}