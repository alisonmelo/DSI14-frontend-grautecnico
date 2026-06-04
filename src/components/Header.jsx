export function Header({setBusca}) {
  return (
    <header className="header-area" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '0 30px',
      backgroundColor: '#0f172a',
      borderBottom: '1px solid #1e293b',
      height: '80px',
      color: 'white'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>🔍</span>
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          onChange={(evento)=>setBusca(evento.target.value)}
          style={{ background: 'none', border: 'none', color: 'white', outline: 'none' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontWeight: '500' }}>Prof. Alison Melo</span>
        
        {/* Container do Avatar com position relative */}
        <div style={{ position: 'relative' }}> 
          <div style={{ 
            width: '42px', height: '42px', borderRadius: '50%', background: '#38bdf8',
            display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px'
          }}>
            👤
          </div>
          {/* A nossa bolinha pulsante entrando aqui! */}
          <div className="status-online"></div>
        </div>
      </div>
    </header>
  );
}