
// import './App.css';
// import {BrowserRouter as Router, Switch, Route} from'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
// import Home from './components/pages/Home'
// import About from './components/pages/About'

// function App() {
//   return (
  
//    <>
//    <Router>
//    <Navbar/>
//    <Switch>
//      <Route path='/'exact component={Home}/>
//      <Route path='/about'exact component={About}/>
    
//    </Switch>
//   </Router>
     
//     </>
//   );
// }

// export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
// import Details from './components/Details'
// import Cart from './components/Cart'
import './App.css'
import Home from"./components/pages/Home"

import AboutSection from"./components/pages/About"
import CartSection from './components/pages/CartPage';
import Navbar from'./components/Navbar/Navbar';
import Menu from './components/pages/Menu'



function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
        <Navbar/>
          <section>
            <Switch>
            <Route path='/'exact component={Home}/>
              <Route path="/menu" component={Menu} />
              {/* <Route path="products/:id" element={ <Details /> } /> */}
              <Route path="/cart" component={CartSection}
               />
                <Route path="/about" component={AboutSection}
               />
            </Switch>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
