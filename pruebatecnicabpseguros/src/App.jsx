import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/DashboardPage'
import ClientePage from './page/ClientePage'
import PolizaPage from './page/PolizaPage'
import Rutas from './util/Rutas'

const App = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path={Rutas.LoginPage} element={<LoginPage />} />
          <Route path={Rutas.DashboardPage} element={<DashboardPage />} />
          <Route path={Rutas.ClientePage} element={<ClientePage />} />
          <Route path={Rutas.PolizaPage} element={<PolizaPage />} />
        </Routes>
    )
  }
  
  export default App