import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HompePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header.component';
import SignPage from './pages/signpage/signpage.component';




function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route exact path='/' element={<HompePage />} />
            <Route exact path='/shop' element={<ShopPage />} />
            <Route exact path='/signin' element={<SignPage/>} />
          </Route>
        </Routes>

      </BrowserRouter>


    </div>

  );
}

export default App;
