import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import { products } from './utils/productPages';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {products.map((product) => (
          <Route path={`/products/${product.name}`} element={ <Product prop={product} /> } />
        ))}
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
