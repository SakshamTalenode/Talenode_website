import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { products, subProducts, useCases } from "./utils/data";
import Product from "./pages/Product";
import UseCase from "./pages/UseCase";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useCookies } from "react-cookie";
import CookieForm from "./components/CookieForm";
import DataSight from "./pages/subProducts/DataSight";

function App() {
  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Solutions" element={<Solutions />} />
        {products.map((product) => (
          <Route
            path={`/products/${product.name}`}
            element={<Product prop={product} />}
          />
        ))}
        {subProducts.map((subProduct) => (
          <Route path={`/products/DataSight/${subProduct.name}`} element={<DataSight prop={subProduct} />}/>
        ))}
        {useCases.map((useCase) => (
          <Route
            path={`/useCases/${useCase.name}`}
            element={<UseCase prop={useCase} />}
          />
        ))}
        <Route path="/Resources" element={<Resources />} />
        <Route path="/About" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>

      {!cookies.cookieConsent && <CookieForm />}
      <Footer />
    </>
  );
}

export default App;
