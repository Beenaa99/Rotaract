import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Img2 from '../../assets/images/back.jpeg';
import {motion} from 'framer-motion';

import './Home.scss'
function Home() {
  return(
      <div className="main">
      <div> 
      <motion.div className='back' animate={{opacity:1}}
      initial={{opacity: 0}}
      transition={{ ease: "easeOut", duration: 1}} >
        <motion.p
        animate={{ x: 100, y:220, opacity:1}}
        initial={{opacity: 0, y:220,x: -100}}
        transition={{ ease: "easeOut", duration: 2, delay: 1.5}}
        className='caption'>
        Unity.</motion.p>
        <motion.p
        animate={{ x: 100, y: 225, opacity:1}}
        initial={{opacity: 0, y:225, x: -100}}
        transition={{ ease: "easeOut", duration: 2, delay: 1.7}}
        className='caption'>
        Empathy.</motion.p>
        <motion.p animate={{ x: 100, y: 230, opacity:1 }}
        initial={{opacity: 0, y:230, x: -100}}
        transition={{ ease: "easeOut", duration: 2, delay: 2}}
        className='caption'>
        Teamwork.</motion.p>'
        </motion.div>
      </div>
      <br/>
      <h2 className="text-center">About Rcmms</h2>
    <div className='grids'>
    <Container>
    <Row >
    <Col md={6} sm={12}>
    <Image src={Img2} alt='hi' fluid style={{paddingLeft:"2vw"}}/>
    </Col>
    <Col md={{span:5, offset:1}} sm={12}>
    <div className ="text-center" >
    <br/>
    <h2>Society</h2>
    We are a family of like-minded individuals working towards the same goal - "Fellowship through service". Striving to make positive changes in the world.
    </div></Col>
  </Row>
  <Row >
    <Col md={{span:6, offset:1} } sm={12}>
    <Image src={Img2} alt='hi' fluid/>
    </Col>
    <Col md={{ span:5, order:'first'}} sm={12}>
    <div className ="text-center" >
    <br/>
    <h2>Society</h2>
    We are a family of like-minded individuals working towards the same goal - "Fellowship through service". Striving to make positive changes in the world.
    </div></Col>
  </Row>
  <Row >
  <Col md={6} sm={12}>
  <Image src={Img2} alt='hi' fluid/>
  </Col>
  <Col md={{span:5, offset:1}} sm={12}>
  <div className ="text-center" >
  <br/>
  <h2>Society</h2>
  We are a family of like-minded individuals working towards the same goal - "Fellowship through service". Striving to make positive changes in the world.
  </div></Col>
</Row>
</Container>
<br/>
    </div>
    </div>
  )
  
}
export default Home;
