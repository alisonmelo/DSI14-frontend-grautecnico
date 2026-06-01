import { Github, Linkedin, BriefcaseBusiness } from 'lucide-react';
export function StudentCard() {
    return (
        <div className='card' style={{
            width: '320px',
            height: '480px',
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #1cb89e',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s',
            cursor: 'pointer',
        }}>
            <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
            }}>
                <img src="{aluno.foto}" alt={aluno.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
                height: '200px',
                background: '#df4c38',
            }}>
                <div style={{
                    padding: '20px'
                }}>
                    <h3>MEU LINDO NOME</h3>
                    <p>Bio muito massa de quem sou eu</p>
                </div>
            </div>
        </div>
    )
}