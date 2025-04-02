const InputTextComponent = ({
    setModelo = () => { },
    datoInput = "",
    label = "",
    placeholder = "",
    name = "",
    esObligatorio = false
}) => {
    const handleChange = (e) => {
        setModelo(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="form-group mb-3">
            <label className="form-label">
                {label} 
                { esObligatorio && <span className="text-danger mx-1">*</span>}
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

export default InputTextComponent
