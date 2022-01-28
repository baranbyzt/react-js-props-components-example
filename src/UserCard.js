
import React from 'react';


const UserCard = (props)=> {
   // console.log(props)
    return(
<div className='ui card' style={{margin:"50px"}}>
    <div className='content'>
<div className='header'>
    alex tancredi
</div>
<div className='descripttion'>
    {props.children}
</div>
<div className='ui bottom button'>
    <i className='add icon'></i>
    Add friends
</div>
    </div>
</div>
    )
}

export default UserCard;