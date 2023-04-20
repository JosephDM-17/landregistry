import React from 'react'
import Navigation from '../Navbar/Navbar'
import house from '../../assets/house.jpg'
import Card from '../card/card';
import './Landingpage.css'
import { useNavigate } from 'react-router-dom';
function Landingpage() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/viewpost')
  }
  return (
    <div>
     
 
 
    <div className="card-container" onClick={handleClick}>
      <Card 
        imageSrc="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
        title="2.5 eth"
        subtitle="ernakulam"
      />
    <Card 
        imageSrc={house}
        title="2.5 eth"
        subtitle="ernakulam"
      />
      <Card 
        imageSrc="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
        title="2.5 eth"
        subtitle="ernakulam"
      />
    <Card 
        imageSrc={house}
        title="2.5 eth"
        subtitle="ernakulam"
      />
    </div>

    
 


      
    </div>
  )
}

export default Landingpage