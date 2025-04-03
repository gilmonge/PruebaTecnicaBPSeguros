const TablaComponent = ({ encabezados, datos }) => {
    return (
        <>
            {(datos && datos.length == 0) &&
                <div className="alert alert-secondary" role="alert">No hay datos para mostrar</div>
            }
            {(datos && datos.length > 0) &&
                <div className="table-responsive">
                    <table className="table table-hover table-borderless mb-0">
                        <thead>
                            <tr>
                                {encabezados.map((encabezado, index) => (
                                    <th key={index} className="text-uppercase">{encabezado.headerName}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((objetoDato, indexObjeto) => (
                                <tr key={indexObjeto}>
                                    {objetoDato.map((dato, indexDato) => (
                                        <td key={`${indexObjeto}-${indexDato}`}>
                                            <div key={indexDato} >{dato}</div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default TablaComponent
