import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banking from './Pages/Banking';
import Credit_Cards from './Pages/Credit_Cards';
import Home from './Pages/Home';
import Insurance from './Pages/Insurance';
import Investing from './Pages/Investing';
import Loan from './Pages/Loan';
import Personal_Finance from './Pages/Personal_Finance';
import Small_Business from './Pages/Small_Business';
import Taxes from './Pages/Taxes';
import Compare from './Pages/Compare'
import Blog from './Pages/Blog';
import Calculators from './Pages/Calculators';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Banking' element={<Banking />} />
        <Route path='/Credit_Cards' element={<Credit_Cards />} />
        <Route path='/Insurance' element={<Insurance />} />
        <Route path='/Investing' element={<Investing />} />
        <Route path='/Loan' element={<Loan />} />
        <Route path='/Personal_Finance' element={<Personal_Finance />} />
        <Route path='/Small_Business' element={<Small_Business />} />
        <Route path='/Taxes' element={<Taxes />} />
        <Route path='/Compare' element={<Compare />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Calculators' element={<Calculators />} />
      </Routes>
      <div className="main-content">
        
      </div>
      <Footer />
    </div>
  )
}

export default App