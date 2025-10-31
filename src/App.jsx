import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Hooks from './hooks'
import Forms from './Forms/forms'
import Characters from './Pages/Characters'
import Locations from './Pages/Locations'
import Episodes from './Pages/Episodes'
import Element from './Pages/Element'

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
      </ul>
      <Routes>
        <Route path="/"></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/characters/:id" element={<Element />}></Route>
        <Route path="/locations" element={<Locations />}></Route>
        <Route path="/locations/:id" element={<Element />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/episodes/:id" element={<Element />}></Route>
        <Route path="/*"></Route>
      </Routes>
    </>
  )
}

export default App
