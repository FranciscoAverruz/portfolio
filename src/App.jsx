import {Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<About />} />
          <Route path='about' element={<About />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='experience' element={<Experience />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
