
export function StudentCard({ aluno }) {

  const {like,setLike} = userState(0);
  return (
    <div className="card" style={{
      width: '320px',
      height: '480px',
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #334155',
      display: 'flex',
      flexDirection: 'column',
      color: '#f8fafc'
    }}>
      {/* AREA DA FOTO */}
      <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
        <img 
          src={aluno.foto} 
          alt={aluno.nome} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* CORPO DO CARD */}
      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '22px' }}>{aluno.nome}</h3>
        <span style={{
          color: '#38bdf8', 
          backgroundColor: '#0c4a6e', 
          padding: '4px 8px', 
          borderRadius: '4px',
          fontSize: '14px',
          alignSelf: 'flex-start'
        }}>{aluno.stack}</span>
        
        <p style={{ color: '#94a3b8', fontSize: '15px', flexGrow: 1 }}>
          {aluno.bio}
        </p>

        {/* RODAPÉ DO CARD */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: '15px',
          borderTop: '1px solid #334155'
        }}>
          {/* Lado Esquerdo: Emojis Provisórios */}
          <div style={{ display: 'flex', gap: '15px', fontSize: '20px' }}>
            <a href={aluno.github} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>🐙</a>
            <a href={aluno.linkedin} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>💼</a>
            <a href={aluno.portfolio} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>🌐</a>
          </div>

          <button style={{
            backgroundColor: '#38bdf8', color: '#020617', border: 'none',
            padding: '8px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer'
          }}>
            Perfil 🔗
          </button>
        </div>
      </div>
    </div>
  );
}