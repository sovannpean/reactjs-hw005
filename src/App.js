import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import Navebar from './components/Navebar';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';
import FaqsPage from './pages/FaqsPage'

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Navebar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/categories' element={<CategoriesPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
          <Route path='/faq' element={<FaqsPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
    
  );
}

export default App;
