// eslint-disable-next-line
import React from 'react';
import SingleProduct from '../Product/SingleProduct';
import Products from '../Product';
import Page from '../Page';
import Contact from '../Contact';
import Popin from '../Popin';
import presentationImg from "../../img/logo.png";
import {  BrowserRouter  as Router,Route, Switch,Link } from 'react-router-dom';
import './App.css';


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
                <a><Link to ={'/'} className="nav-link" style={{color:'white',fontSize:''}}> Accueil </Link></a>
              </li>
              <li className="nav-item">
                <a><Link to ={'/products'} className="nav-link" style={{color:'white',fontSize:''}}> Nos produits</Link></a>
              </li>
              <li className="nav-item">
                <a><Link to ={'/contact'} className="nav-link" style={{color:'white',fontSize:''}}> Contact</Link></a>
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
                    <div className="head">
                      <h1>Bienvenue sur notre site</h1>
                      </div>
                
                    <p className="paragraph">Igitur nihil opibus itinera mox nihil adnexam cum tempore ibique pascebantur tempore maritima maritima ora
                    tempore provincialium praetenturis viatorum densis.Nemo quaeso miretur, si post exsudatos labores itinerum . Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri </p>
                   <p className="paragraph">Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri 
                    ductante barbaricos pagos adventans velut mutato. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod .</p>

                        <Popin />
                        <div className="App">
                  <header className="App-header">
                  <img src={presentationImg} className="App-logo " alt="presentation"/>
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
