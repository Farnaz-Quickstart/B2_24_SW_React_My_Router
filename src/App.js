
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import HomePage from './pages/HomePage/HomePage';
import NavbarMenu from './component/NavbarMenu/NavbarMenu';
import Counter from './component/Counter/Counter'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </>
    
    
    

      
  );
}

export default App;
