import {Github, Linkedin, BriefcaseBusiness, ExternalLinks} from 'lucide-react';
export function StudentCard() {
    return (

        <div style={{
            width: '320px',
            height: '420px',
            backgroundColor: '#white',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #334155'
        }}>
            <div style={{ height: '200px', background: '#334155' }}>
                <div>{{ padding: '20px' }}>
                    <h3>Portugol lindão</h3>
                    <p>Viciado em perfumes e em esportes de combate.</p>
                </div>
            </div>

        </div>
    )
}