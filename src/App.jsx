import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Main from "./pages/Main"
import Employee from "./pages/Employee"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/main" element={<Main />}/>
      <Route path="/employee" element={<Employee/>} />
    </Routes>
  )
}

export default App
