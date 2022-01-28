
import React from 'react';
import ReactDOM from 'react-dom';
import SinmleComment from './SimpleComment';
import img1 from './img/img-1.jpg';
import img2 from './img/img-2.jpg';
import img3 from './img/img-3.jpg';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui comments'>


<UserCard>
<SinmleComment 
name='baran' 
date_mian='today at 6:34'
 text="software anginear" 
 image_chose={img1} />
</UserCard>

<UserCard>
<SinmleComment name='kerem'  
date_mian='today at 2:04'
 text='inşaat mühendisi'
 image_chose={img2}/>
</UserCard>


<UserCard>
    <SinmleComment name='azad' 
 date_mian='today at 1:24'
  text='müzisyen'
  image_chose={img3}/>
</UserCard>




        </div>

    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)