import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/DashboardPage'
import ClientePage from './page/ClientePage'
import PolizaPage from './page/PolizaPage'
import RutasUtil from './util/RutasUtil'
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path={RutasUtil.LoginPage} element={<LoginPage />} />
          <Route path={RutasUtil.DashboardPage} element={<DashboardPage />} />
          <Route path={RutasUtil.ClientePage} element={<ClientePage />} />
          <Route path={RutasUtil.PolizaPage} element={<PolizaPage />} />
        </Routes>
    )
  }
  
  export default App