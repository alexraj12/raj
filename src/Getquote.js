

import React from 'react'
import { FaUserAlt,FaLock  } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { MdEmail,MdCall  } from "react-icons/md";
function SignUpForm(){


return (
    <>
<div className='wrapper'>
 <form className='form'>
   <h1 style={{textAlign: 'center',color: '#000000',fontSize:'35px'}}>Get Quote</h1>
   <div className='input-box'>
      <input type='text' placeholder='Name' className='input' required/>
      <FaUserAlt className='icon'/>
   </div>
  
   <div className='input-box'>
      <input type='text' placeholder='Mobile' className='input' required/>
      <MdCall className='icon'/>
   </div>
   <div className='input-box'>
      <input type='text' placeholder='Email' className='input' required/>
      <MdEmail  className='icon'/>
   </div>
   <div className='input-box'>
      <input type='text' placeholder='Location' className='input' required/>
      <FaLock className='icon'/>
   </div>
   <div className='input-box'>
    <input type='text' placeholder='Requirement' className='input' required/>
    <GiNotebook  className='icon'/>
   </div>
   <div className='input-box'>
    <input type='text' placeholder='Choose your event date' className='input' requried/>
    <CiCalendarDate  className='icon'/>
   </div>

   <button type='submit' className='btn2'>submit</button> 
 </form>
</div>
    </>
)
}
export default SignUpForm;

