import './app.css'
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import InputForm from './Pages/InputForm'

const App = () => {

  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/inputForm' element={<InputForm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

