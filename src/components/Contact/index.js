import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Contact.scss';

function Contact(){
return(
<div>
    <div className='heading'>
    <h1>Nous contacter</h1>
    <h6>Vous souhaitez nous contacter pour un achat déjà effectué?</h6>
    </div>
  <Container>
  <Row>
    <Col xs={12} md={4}>
   <h6>Oui, j'ai déjà acheté </h6>
   <form>
   <button type="button" className="btn btn-primary" >Cliquer ici </button>
</form>
    </Col>
    <Col xs={12} md={4}>
   <h6>Non, j'ai un projet d'achat</h6> 
   <form>
   <button type="button" className="btn btn-primary " >Cliquer ici </button>
</form>    
    </Col>
    <Col xs={12} md={4}>
    <h6>Non, je n'ai un projet d'achat</h6>       
    <form>
   <button type="button" className="btn btn-primary" >Cliquer ici </button>
</form>    
   </Col>
  </Row>
  <hr />
  
</Container>


  </div>
        
);

};

export default Contact;