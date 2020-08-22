import React from 'react';
import './cards.css';
import img1 from '../../assets/images/back.jpeg';



import First from './First';

function Cards(){
        return(

            <div className="container-fluid cardBody">
            <h2 className="text-center">Project Avenues</h2>
                <div className="d-flex justify-content-space-between">
               
                    <div className="row justify-content-space-between">
                        <div className="col-md-3">
                            <First imgsrc={img1} title="ONE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="col-md-3">
                            <First imgsrc={img1} title="TWO" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. axime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, earum perspiciatis est debitis numquam esse officiis praesentium nisi! Illum, consectetur? Necessitatibus, iste tempore."/>
                        </div>
                        <div className="col-md-3">
                            <First imgsrc={img1} title="THREE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="col-md-3">
                        <First imgsrc={img1} title="FOUR" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                       
                        <div className="col-md-3">
                            <First imgsrc={img1} title="FIVE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                            </div>
                            <div className="col-md-3">
                                <First  imgsrc={img1} title="SIX" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                            </div>
                            <div className="col-md-3">
                            <First imgsrc={img1} title="SEVEN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="col-md-3">
                            <First imgsrc={img1} title="EIGHT" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row">
                        
                        <div className="col-md-3">
                            <First imgsrc={img1} title="NINE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
        
                        </div>
                        
                        <div className="col-md-3">
                            <First imgsrc={img1} title="TEN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        <div className="col-md-3">
                            <First imgsrc={img1} title="ELEVEN" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis iure exercitationem repellendus dolore temporibus maxime vitae excepturi iste ipsa ratione aliquid cumque aperiam magni possimus architecto, e"/>
                        </div>
                        
                        </div>
                </div>

               
                
            </div>
            
        
        )
}

export default Cards;
