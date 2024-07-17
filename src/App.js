import './App.css';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import { products, useCases } from './utils/data';
import Product from './pages/Product';
import UseCase from "./pages/UseCase";
import Solutions from './pages/Solutions';
import { useNavigate } from 'react-router';


function App() {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Solutions' element={<Solutions />} />
        {products.map((product) => (
          <Route path={`/products/${product.name}`} element={ <Product prop={product} /> } />
        ))}
        {useCases.map((useCase) => (
          <Route path={`/useCases/${useCase.name}`} element={ <UseCase prop={useCase} />} />
        ))}
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
