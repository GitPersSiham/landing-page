// eslint-disable-next-line
import React from 'react';
import SingleProduct from '../Product/SingleProduct';
import Products from '../Product';
import Page from '../Page';
import Contact from '../Contact';
import Popin from '../Popin';
import {  BrowserRouter  as Router,Route, Switch,Link } from 'react-router-dom';
import './App.css';
import logo from "./../../../src/logo.svg";


function App() {
    return (
          <div>
           <Router>
           <div>
           <nav className="navbar navbar-expand-md bg-dark navbar-dark">
             <a className="navbar-brand" href="Nabar" role="tablist"  />
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
             </button>
           <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a><Link to ={'/'} className="nav-link" style={{color:'white'}}> Acceuil </Link></a>
              </li>
              <li className="nav-item">
                <a><Link to ={'/products'} className="nav-link" style={{color:'white'}}> Nos produits</Link></a>
              </li>
              <li className="nav-item">
                <a><Link to ={'/contact'} className="nav-link" style={{color:'white'}}> Contact</Link></a>
             </li>
             <li className="nav-item">
              <a href="/"><img src={logo} id="logo" className="nav-link"  alt="my-logo"/></a>
               </li>    
           </ul>
         </div>  
      </nav>
          <hr />
            <Switch>
                <Route path="/products" exact component={Products} />
                <Route path="/products/:id" component={SingleProduct}/>
                <Route path="/contact" component={Contact} />
                <Route render={() => (
                    <div className="w3-container w3-center w3-animate-zoom">  
                        <h1>Bienvenue sur notre site</h1>
                        <div className="text">
                        <p>Igitur nihil opibus itinera mox nihil adnexam cum tempore ibique pascebantur tempore maritima maritima ora tempore provincialium praetenturis viatorum densis.
                        Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <Popin />
                        <div className="App">
                  <header className="App-header">
                  <img src='../img/logo.png' className="App-logo " alt="presentation"/>
                  </header>
                  </div>
                  <br/>
                  <Page />
                  <br/><br/><br/>
                    </div>
                )} />
                
            </Switch>
          </div>
          </Router>
       </div>   
     
    );
};

export default App;
