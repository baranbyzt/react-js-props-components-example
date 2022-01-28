
import React from 'react';

import New  from './New';




const SimpleComment = (props) => {


    return (
     
        <div className='comment'>

        <a href='/' className='avatar'>
        <img src={props.image_chose} alt="profile picture"/>
        </a>
        <div className='content'>
        <a href="/" className='author'>
        {props.name}
        </a>    
        <div className='metadata'>
        <span className='date'>
        {props.date_mian}
        </span>
        </div>
        <div className='text'>
        <New text={props.text}  />
        </div>
             </div>
            </div>

    )
}

export default SimpleComment;