import './App.css';
import Navbar from './Components/SubComponents/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Admission from './Components/Pages/Admission';
import Footer from './Components/SubComponents/Footer';
import Contact from './Components/Pages/Contact';
import Courses from './Components/Pages/Courses';
import Blogs from './Components/Pages/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
