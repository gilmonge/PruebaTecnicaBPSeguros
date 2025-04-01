const ModalComponent = ({ mostrar, setmostrar, children, tamanioModal = '', tituloModal = '' }) => {
    const cerrar = () => setmostrar(false);
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
                            <div className="modal-header">
                                <h5 className="modal-title">{tituloModal}</h5>
                                <button type="button" className="btn-close" onClick={cerrar}></button>
                            </div>
                            <div className="modal-body">{children}</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={cerrar}>
                                    Cerrar
                                </button>
                                <button className="btn btn-secondary" onClick={cerrar}>
                                    Cerrar 2
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalComponent
