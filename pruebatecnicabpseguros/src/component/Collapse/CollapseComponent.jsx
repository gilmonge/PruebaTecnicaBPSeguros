import { useState } from 'react'

const CollapseComponent = ({ 
    titulo = "Mostrar/Ocultar", 
    children 
}) => {
    const [abierto, setAbierto] = useState(false)

    const toggleCollapse = () => {
        setAbierto(prev => !prev)
    }

    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h4>{titulo}</h4>
                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={toggleCollapse}
                >
                    {abierto ? 'Ocultar' : 'Mostrar'}
                </button>
            </div>

            {abierto && (
                <div className="card-body">
                    {children}
                </div>
            )}
        </div>
    )
}

export default CollapseComponent