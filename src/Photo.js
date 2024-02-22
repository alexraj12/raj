
import React from 'react'  
import { Link } from 'react-router-dom';
//import { a } from 'react-router-dom';

function Photo() {
  return (
      <div className='img '> 
       <Link to='/'/>  
      <div className='div'>     
        <table >
             
            <label className='t'><b>RAJ<br/>PHOTOGRAPHY</b></label>
            <Link to='/Home'><label><button className='h'>Home</button></label></Link>
            <Link to='about'><label><button className='a'>About</button></label></Link>
            <Link to='getquote'><label><button className='g'>getquote</button></label></Link>
            <Link to='gallery'><label><button className='gq'>gallery</button></label></Link>             
        </table>
        </div>
     </div>
  )
}

export default Photo;
