import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';

const SelectorFechaComponent = ({
    setModelo = () => { },
    datoInput = "",
    label = "",
    name = "",
    esObligatorio = false
}) => {
    registerLocale('es', es);
    const [startDate, setStartDate] = useState(null);

    const handleChange = (e) => {
        const anio = e.getFullYear()
        const mes = String(e.getMonth() + 1).padStart(2, '0')
        const dia = String(e.getDate()).padStart(2, '0')
        const value = `${anio}-${mes}-${dia}T06:00:00.000Z`
        setModelo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {
        if(datoInput !== null) setStartDate(new Date(datoInput));
    }, [datoInput]);

    return (
        <div className="form-group mb-3">
            <label className="form-label">
                {label} 
                { esObligatorio && <span className="text-danger">*</span>}
            </label>
            <div className="row px-3">
                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    className="form-control w-100"
                    placeholderText="Seleccionar fecha"
                />
            </div>
        </div>
    )
}

export default SelectorFechaComponent
