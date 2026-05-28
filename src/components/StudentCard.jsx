export function StudentCard() {
    return (
        <div style={{
            width: '320px',
            height: '420px',
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #334155'
        }}>
            <div style={{ height: '200px', background: '#334155' }}></div>
            <div style={{ color:"black", padding: '20px' }}>
                <h3>MEU LINDO NOME</h3>
                <p>Bio muito massa de quem sou eu</p>
            </div>
        </div>
    )
}