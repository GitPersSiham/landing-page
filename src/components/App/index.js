import React from 'react';
import SingleProduct from '../Product/SingleProduct';
import Products from '../Product';
import Page from '../Page';
import Contact from '../Contact';
import {  BrowserRouter  as Router,Route, Switch,Link } from 'react-router-dom';
import './App.css';






function App() {

   
    return (
      
          <div>
           <Router>
           <div>
           <nav className="navbar navbar-expand-md bg-dark navbar-dark">
             <a className="navbar-brand" href="Nabar" />
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
             </button>
           <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a><Link to={'/'} className="nav-link" style={{color:'white',fontSize:''}}> Acceuil </Link></a>
              </li>
              <li className="nav-item">
                <a><Link to={'/products'} className="nav-link" style={{color:'white',fontSize:''}}> Nos produits</Link></a>
              </li>
              <li className="nav-item">
                <a><Link to={'/contact'} className="nav-link" style={{color:'white',fontSize:''}}> Contact</Link></a>
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
                        <p><span className="Text">Quod opera consulta cogitabatur astute, ut hoc insidiarum genere Galli periret avunculus, ne eum ut praepotens acueret in fiduciam exitiosa coeptantem. verum navata est opera diligens hocque dilato Eusebius praepositus cubiculi missus est Cabillona aurum secum perferens, quo per turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus est in tuto locata praefecti. deinde cibo abunde perlato castra die praedicto sunt mota.</span></p>
                        <div className="App">
                  <header className="App-header">
                  <img src='../img/logo.png' className="App-logo " />
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
