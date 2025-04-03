import { useState, useEffect } from 'react';
import SelectorComponent from "../Controles/SelectorComponent";
import ObtenerListaService from '../../service/Persona/Cliente/ObtenerListaService'
import { ClienteFiltroModel } from '../../model/ClienteModel';

const SelectorClienteComponent = ({
    setModelo = () => { },
    datoInput = "",
    label = "",
    name = "",
    placeholder = "Seleccione una opción",
    esObligatorio = false
}) => {
    const filtroBusquedaLimpio = new ClienteFiltroModel();
    const [datos, setDatos] = useState([]);
    const [filtroBusqueda, setFiltroBusqueda] = useState(filtroBusquedaLimpio);
    const [filtroListado, setFiltroListado] = useState({
        paginaActual: 1,
        cantidadDatos: 10,
        filtro: null
    });

    const obtenerInformacionClientes = async () => {
        const obtenerListaService = new ObtenerListaService();
        const filtroBusquedaLocal = filtroListado;
        filtroBusquedaLocal.filtro = filtroBusqueda;

        const { exito, mensaje, dato } = await obtenerListaService.servicio(filtroBusquedaLocal);

        if (!exito) {
            setMensajeModal(mensaje);
            setMostrarModalMensaje(true);
            return;
        }
        const datosModelados = dato.map(x => (
            { 
                value: x.cedulaAsegurado, 
                label: `${x.nombre} ${x.primerApellido} ${x.segundoApellido}`
            }));

        setDatos(datosModelados);
    }

    useEffect(() => { obtenerInformacionClientes(); }, [])

    return (
        <SelectorComponent 
            setModelo={setModelo}
            datoInput={datoInput}
            label={label}
            placeholder={placeholder}
            name={name}
            opciones={datos}
            esObligatorio={esObligatorio}
        />
    )
}

export default SelectorClienteComponent
