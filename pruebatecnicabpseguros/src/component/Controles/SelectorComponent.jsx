const SelectorComponent = ({
    setModelo = () => { },
    datoInput = "",
    label = "",
    name = "",
    opciones = [],
    placeholder = "Seleccione una opción",
    esObligatorio = false
}) => {
    const handleChange = (e) => {
        setModelo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="form-group mb-3">
            <label className="form-label">
                {label} 
                { esObligatorio && <span className="text-danger mx-1">*</span>}
            </label>
            <select
                className="form-select"
                name={name}
                value={datoInput}
                onChange={handleChange}
            >
                <option value="" >{placeholder}</option>
                {opciones.map((opcion, index) => (
                    <option key={index} value={opcion.value}>
                        {opcion.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectorComponent
