import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Page.css';
import lampeTmg from "../../img/lampe-design.jpg";
import ThéièreImg from "../../img/theiere-noire.jpg";
import carafImg from "../../img/carafe.jpg";
import oiseauImg from "../../img/oiseau.jpg";
import mugImg from "../../img/mug.jpg";
import assietImg from "../../img/assiette.jpg";



const Page =() => {
  return(
  <div>
    <div className='heading'>
    <h4>autres</h4>
    </div>
    
  <Container>
  <Row>
    <Col xs={12} md={4}>
      <img src={lampeTmg} height="200" width="200" className="img" alt="lampe" />
       <span className="product"><p>Lampe-design</p></span>
       
    </Col>
    <Col xs={12} md={4}>
      <img src={ThéièreImg} height="200" width="200" className="img" alt="théière"/>
      <span className="product"><p>Théière-design</p></span>
       
    </Col>
    <Col xs={12} md={4}>
      <img src={carafImg} height="200" width="200" className="img" alt="carafe"/>
     <span className="product" ><p>carafe-design</p></span>
       
    </Col>
  </Row>
  <hr />
  <Row>
    <Col xs={12} md={4}>
      <img src={oiseauImg} height="200" width="200" className="img" alt="oiseau"/>
      <span className="product" ><p>oiseau-design</p></span>
     
    </Col>
    <Col xs={12} md={4}>
      <img src={mugImg} height="200" width="200" className="img" alt="mug"/>
      <span className="product"> <p>Mug-design</p></span>
      
    </Col>
    <Col xs={12} md={4}>
      <img src={assietImg} height="200" width="200" className="img" alt="toile"/>
      <span className="product" ><p>Toile-design</p></span>
      
    </Col>
  </Row>
</Container>
</div>

  
  );
};
export default Page