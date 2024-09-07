import './app.css'
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import DetailedReport from './Pages/DetailedPlan'
import InputForm from './Pages/NewPlan'
import CompareProject from './Pages/CompareProject'
import Login from './Pages/Login'
import DiscussionForum from './Pages/DiscussionForum'
import Forum from './Pages/Forum'
import SchedulePlan from './Pages/SchedulePlan'
import AppointmentForm from './Pages/AppointmentForm'

const App = () => {

  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newplan' element={<InputForm/>}/>
          <Route path='/details' element={<DetailedReport/>}/>
          <Route path='/CompareProject' element={<CompareProject/>}/>
          <Route path='/discussionforum' element={<DiscussionForum/>}/>
          <Route path='/forum' element={<Forum/>}/>
          <Route path='/scheduleplan' element={<SchedulePlan/>}/>
          <Route path='/appointmentform' element={<AppointmentForm/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

