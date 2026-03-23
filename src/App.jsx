import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"
import AdminRoutes from './Routes/AdminRoutes'

function App() {

  return (

    <div className="min-h-screen w-full bg-black relative">
      <div className="relative z-10">
        <AdminRoutes />
      </div>
    </div>
  )
}

export default App
