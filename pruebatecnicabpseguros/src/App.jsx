import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/DashboardPage'
import ClientePage from './page/ClientePage'
import PolizaPage from './page/PolizaPage'
import SeguridadPage from './page/SeguridadPage'
import RutasUtil from './util/RutasUtil'
import "react-datepicker/dist/react-datepicker.css";
import RutaPrivada from './RutaPrivada'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={RutasUtil.LoginPage} />} />
            <Route path={RutasUtil.LoginPage} element={<LoginPage />} />

            <Route 
                path={RutasUtil.DashboardPage} 
                element={ <RutaPrivada> <DashboardPage /> </RutaPrivada> }
            />
            <Route 
                path={RutasUtil.ClientePage} 
                element={ <RutaPrivada> <ClientePage /> </RutaPrivada> }
            />
            <Route 
                path={RutasUtil.PolizaPage} 
                element={ <RutaPrivada> <PolizaPage /> </RutaPrivada> }
            />
            <Route 
                path={RutasUtil.SeguridadPage} 
                element={ <RutaPrivada> <SeguridadPage /> </RutaPrivada> }
            />
        </Routes>
    )
}

export default App