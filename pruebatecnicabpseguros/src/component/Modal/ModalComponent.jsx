const ModalComponent = ({ 
    mostrar, setmostrar, 
    children, 
    tamanioModal = '', 
    tituloModal = '', 
    mostrarBotonAdicional = false,
    mensajeBotonAdicional = '',
    handleBotonAdicional = () => {},
    handleBotonCerrar = () => setmostrar(false),
    estiloBotonAdicional = '',
    mostrarTitulo = true,
}) => {
    return (
        <>
            {mostrar && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className={`modal-dialog modal-dialog-centered ${tamanioModal}`} role="document">
                        <div className="modal-content">
                            {mostrarTitulo && (
                            <div className="modal-header">
                                <h5 className="modal-title">{tituloModal}</h5>
                                <button type="button" className="btn-close" onClick={handleBotonCerrar}></button>
                            </div>
                            )}
                            <div className="modal-body">{children}</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={handleBotonCerrar}>
                                    Cerrar
                                </button>
                                {mostrarBotonAdicional && (
                                    <button className={`btn ${estiloBotonAdicional}`} onClick={handleBotonAdicional}>
                                        {mensajeBotonAdicional}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalComponent
