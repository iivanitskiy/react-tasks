import './App.css';
import { NavLink } from 'react-router-dom';
import { RootRouter } from './Routes/RootRouter.jsx'
// import Hooks from './hooks'
// import Forms from './Forms/forms'

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
      <RootRouter />
    </>
  )
}

export default App
