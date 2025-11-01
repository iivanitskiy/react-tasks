import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Hooks from './hooks'
import Forms from './Forms/forms'
import Characters from './Pages/Characters'
import Locations from './Pages/Locations'
import Episodes from './Pages/Episodes'
import Element from './Pages/Element'
import Login from './Pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <>
      {/* <Hooks /> */}
      {/* <Forms /> */}
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/characters">Characters</NavLink></li>
        <li><NavLink to="/locations">Location</NavLink></li>
        <li><NavLink to="/episodes">Episode</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<PrivateRoute><div>Home Page</div></PrivateRoute>}></Route>
        <Route path="/characters" element={<PrivateRoute><Characters /></PrivateRoute>}></Route>
        <Route path="/characters/:id" element={<PrivateRoute><Element /></PrivateRoute>}></Route>
        <Route path="/locations" element={<PrivateRoute><Locations /></PrivateRoute>}></Route>
        <Route path="/locations/:id" element={<PrivateRoute><Element /></PrivateRoute>}></Route>
        <Route path="/episodes" element={<PrivateRoute><Episodes /></PrivateRoute>}></Route>
        <Route path="/episodes/:id" element={<PrivateRoute><Element /></PrivateRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*"></Route>
      </Routes>
    </>
  )
}

export default App
