import React from 'react'
import Home from './Components/Home'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Events from './Components/Events'
import RavenTime from './Components/RavenTime'
// function App() {
//   return (
//     <body>
//       <Home />
//     </body>
//   )
// }

function App(){
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="events" element={<Events />}/>
    <Route path="raventime" element={<RavenTime />}/>
  </Routes>
}

export default App 
