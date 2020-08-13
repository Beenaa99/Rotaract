import React from 'react';
import { Image } from 'react-bootstrap';
import {motion} from 'framer-motion';

import l1 from '../../assets/images/back.jpeg';
import './Homepage.css';

export default function Homepage() {
    return (
        <div className='body'>
        <div className='caraousel'>
        <motion.div>
        <motion.p
        animate={{ x: 100, y:200, opacity:1}}
        initial={{opacity: 0, y:200,x: -100}}
        transition={{ ease: "easeOut", duration: 2, delay: 1}}
        className='caption'>
        Unity.</motion.p>
        <motion.p
        animate={{ x: 100, y: 300, opacity:1}}
        initial={{opacity: 0, y:300, x: -100}}
        transition={{ ease: "easeOut", duration: 2, delay: 1.3}}
        className='caption'>
        Empathy.</motion.p>
        <motion.p animate={{ x: 100, y: 400, opacity:1 }}
        initial={{opacity: 0, y:400, x: -100}}
        transition={{ ease: "easeOut", duration: 2, delay: 1.6}}
        className='caption'>
        Teamwork.</motion.p>'
        </motion.div>
        </div>
       
        
         
            <div className='grids'>
            <div className='table'>
     <div className ="text" >
     <h2 style={{marginBottom:'15%'}}>Society</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat.unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil aliquam at ducimus consequuntur repudiandae numquam eligendi, fugit, excepturi doloribus!
    </div>
    <div className="image" >
    <Image src={l1} alt='hi' fluid/>
    </div>

    <div className="image">
    <Image src={l1} alt='hi'/>
    </div>

    <div className ="text" >
    <h2 style={{marginBottom:'15%'}}>Society</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil!
    </div>
    <div className ="text" >
    <h2 style={{marginBottom:'15%'}}>Society</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat dolor!
    </div>
    <div className="image" >
    <Image src={l1} alt='hi' fluid/>
    </div>
    </div>
            </div>
            <div
            className='join'>
            Join now
            </div>
            <div className='footer'></div>
        </div>
    )
}
