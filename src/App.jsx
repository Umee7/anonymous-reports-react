import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateReport from './pages/CreateReport'
import About from './pages/About'
import NavBar from './components/NavBar'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

function App() {
  const [reportData, setReportData] = useState([]);
  const [reportCount, setReportCount] = useState(0);
  const [comment, setComment] = useState([])
  const [addComment, setAddComment] = useState("");

  return (
    <>
    <NavBar />
      <AppContext.Provider value={[reportData, setReportData, reportCount, setReportCount, comment, setComment, addComment, setAddComment]}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createreport' element={<CreateReport />}/>
        <Route path='/about' element={<About />}/>
        </Routes>
      </AppContext.Provider>  
    </>
  )
}

export default App
