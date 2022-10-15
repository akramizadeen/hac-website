import './App.css';
import Navbar from './Components/SubComponents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Admission from './Components/Pages/Admission';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>
    </div>
  );
}

export default App;
