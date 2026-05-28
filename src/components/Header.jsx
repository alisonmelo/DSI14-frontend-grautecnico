import { Search, User } from "lucide-react";

export function Header() {
    return (
        <header className="header-area"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 30px',
                backgroundColor: '#5375c4',
                borderBottom: '1px solid #fff'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <Search size={20} color="#fff" />
                <input
                    type="text"
                    placeholder="Pesquisar no GrauHUB..."
                    style={{
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        color: "white"
                    }} />
            </div>

            <div style={{
                display: 'flex',
                alignItems:'center',
                gap:'15px'
            }}>
                <span>MEU LINDO NOME</span>
                <div style={{
                    width:'40px',
                    height:'40px',
                    borderRadius:'50%',
                    background:'red',
                    display:'grid',
                    placeItems:'center'

                }}>
                    <User color="white"/>
                </div>
            </div>

        </header>
    )
}