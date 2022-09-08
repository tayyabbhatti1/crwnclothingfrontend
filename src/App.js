import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HompePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header.component';
import SignPage from './pages/signpage/signpage.component';
import React from 'react';
import { auth } from './firebase/firebase.utils';




class  App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div >
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route>
              <Route exact path='/' element={<HompePage />} />
              <Route exact path='/shop' element={<ShopPage />} />
              <Route exact path='/signin' element={<SignPage />} />
            </Route>
          </Routes>

        </BrowserRouter>


      </div>

    );
  }

}

export default App;
