import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banking from './Pages/Banking/Banking';
import Credit_Cards from './Pages/Credit_Cards/Credit_Cards';
import Home from './Pages/Home/Home';
import Insurance from './Pages/Insurance/Insurance';
import Investing from './Pages/Investing/Investing';
import Loan from './Pages/Loan/Loan';
import Personal_Finance from './Pages/Personal_Finance/Personal_Finance';
import Small_Business from './Pages/Small_Business/Small_Business';
import Taxes from './Pages/Taxes/Taxes';
import Compare from './Pages/Compare/Compare'
import Blog from './Pages/Blog/Blog';
import ArticleDetails from './components/ArticleDetails';
import Calculators from './Pages/Calculators/Calculators';

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <div className="main-content">
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
          <Route path="/article/:articleId" element={<ArticleDetails />} />
        <Route path='/Calculators' element={<Calculators />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App