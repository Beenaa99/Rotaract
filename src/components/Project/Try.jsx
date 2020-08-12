import React from 'react';
import './Try.css';
import {Card, Image} from 'react-bootstrap';
import back from '../../assets/images/back.jpeg';

 
export default function Try(){
    return(
      <div className='main'>
      <div className='top'>

      <div className='des'><h2>International service</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! Illum, consectetur? Necessitatibus, iste tempore. Quibusdam, dolores delectus odio ipsam facere consequatur mollitia quaerat?

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt exercitationem hic voluptate. Sunt, recusandae harum iste ipsa mollitia quisquam, vero possimus </div>
     <div className='imgg'><Image src='https://drive.google.com/uc?export=download&id=1REsXYkZssrX8K5MZQlqd7Et_HrhoYXQK' fluid height='400px' width='auto' alt="problem"/></div>
      
      </div>
     
      <div className='below'>
      <h2 style={{top: '10vw'}}>Recet projects</h2>
      <div className='holder'>
        <Card  className="cardBody">
            <Card.Img variant="top" src={back} height='50%' width='100%' />
            <Card.Body>
              <Card.Title>Garv</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! 
              </Card.Text>
             
            </Card.Body>
          </Card>
          <Card className="cardBody">
          <Card.Img variant="top" src={back} height='50%' width='100%' />
          <Card.Body>
            <Card.Title>Garv</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! Illum, consectetur? Necessitatibus, iste tempore.
            </Card.Text>
           
          </Card.Body>
        </Card>
        <Card className="cardBody">
          <Card.Img variant="top" src={back} height='50%' width='100%' />
          <Card.Body>
            <Card.Title>Garv</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! Illum, consectetur? Necessitatibus, iste tempore.
            </Card.Text>
           
          </Card.Body>
        </Card>
          </div>
          </div>
          </div>
    )
};