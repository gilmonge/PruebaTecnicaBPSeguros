const InputNumericoComponent = ({
    setModelo = () => { },
    datoInput = "",
    label = "",
    placeholder = "",
    name = "",
    decimales = 0,
    esObligatorio = false
}) => {
    const handleChange = (e) => {
        let valor = e.target.value

        // Expresión regular para números positivos con X decimales
        const regex = new RegExp(`^\\d*(\\.\\d{0,${decimales}})?$`)

        // Permitir vacío (para borrar) o valores que coincidan con el patrón
        if (valor === '' || regex.test(valor)) {
            setModelo((prevState) => ({
                ...prevState,
                [name]: valor
            }))
        }
    }

    return (
        <div className="form-group mb-3">
            <label className="form-label">
                {label} 
                { esObligatorio && <span className="text-danger">*</span>}
            </label>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                name={name}
                value={datoInput}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputNumericoComponent