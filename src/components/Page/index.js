import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Page.css';

const Page =() => {
  return(
  <div>
    <div className='heading'>
    <h4>autres</h4>
    </div>
    
  <Container>
  <Row>
    <Col xs={12} md={4}>
      <img src='../img/lampe-design.jpg' height="200" width="200" className="img" alt="lampe" />
       <h6>Lampe-design</h6>
       
    </Col>
    <Col xs={12} md={4}>
      <img src="../img/theiere-noire.jpg" height="200" width="200" className="img" alt="théière"/>
      <h6>Théière-design</h6>
       
    </Col>
    <Col xs={12} md={4}>
      <img src="../img/caraffe.jpg" height="200" width="200" className="img" alt="carafe"/>
      <h6>carafe-design</h6>
       
    </Col>
  </Row>
  <hr />
  <Row>
    <Col xs={12} md={4}>
      <img src='../img/oiseau.jpg' height="200" width="200" className="img" alt="oiseau"/>
      <h6>oiseau-design</h6>
     
    </Col>
    <Col xs={12} md={4}>
      <img src="../img/mug.jpg" height="200" width="200" className="img" alt="mug"/>
      <h6>Mug-design</h6>
      
    </Col>
    <Col xs={12} md={4}>
      <img src="../img/assiette.jpg" height="200" width="200" className="img" alt="toile"/>
      <h6>Toile-design</h6>
      
    </Col>
  </Row>
</Container>
</div>

  
  );
};
export default Page