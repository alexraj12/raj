
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
function Gallery() {
  
  return (
      
<>
<div className='div'>     
        <table >
             
            <label className='t'><b>RAJ<br/>PHOTOGRAPHY</b></label>
            <Link to='/Home'><label><button className='h'>Home</button></label></Link>
            <Link to='about'><label><button className='a'>About</button></label></Link>
            <Link to='getquote'><label><button className='g'>getquote</button></label></Link>
            <Link to='gallery'><label><button className='gq'>gallery</button></label></Link>             
        </table>
        </div>
{}
<div style={{display:'flex'}}>

<div class="container">
  <img src="https://www.eternity-uk.com/wp-content/uploads/2023/07/814a642c91422af4308080b6c923b089.jpeg" class="image" style={{width:'50%',height:'100%'}} />
  <div class="middle">
    <div class="text" >Ram Sugar</div>
  </div>
</div>
<div class="container">
  <img src="https://i.pinimg.com/736x/fe/ee/cd/feeecd7212f2d51551b69d7498bed599.jpg" class="image" style={{width:'50%',height:'100%'}} />
  <div class="middle">
    <div class="text" >Mad Harish</div>
  </div>
</div>
<div class="container">
  <img src="https://i.pinimg.com/474x/36/27/b7/3627b7ae42b56d00eaa1062a2c91da57.jpg" class="image" style={{width:'50%',height:'100%'}} />
  <div class="middle">
    <div class="text" >Sup Shaliya</div>
  </div>
</div>
<div class="container">
  <img src="https://crystallinestudio.com/image_gallery_big/Crystalline-photogra"width="300" class="image" style={{width:'50%',height:'100%'}} />
  <div class="middle">
    <div class="text" >Abi Moon</div>
  </div>
</div>
<div class="container">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5jElZ852uNSysZIvOUZU81GIT6sWpgm2NAOyM-ECeaF8u_1EWQwi4hUBUmb4oNWIS8w&usqp=CAU" class="image" style={{width:'50%',height:'100%'}} />
  <div class="middle">
    <div class="text" >Anjala Alex</div>
  </div>
</div>


</div>
</>
  )
}

export default Gallery;