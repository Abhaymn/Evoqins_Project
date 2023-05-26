import React from 'react'
import { Card, Image } from 'react-bootstrap'
import headimg from "../assets/head.png";
import classes from "./Header.module.css";
import Vector from "../assets/Vector.png"


const Header = () => {

    const cardStyle = {
        backgroundImage: `url(${headimg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '300px',
        marginLeft: '85px',
        marginRight: '85px'
      };
    
    
  return (
   
        <Card style={cardStyle}>

         
            <Card.Body className={classes.heading}>
                
                <Card.Title style={{ fontWeight: 'bold', fontSize: '35px',color:'white' }} >Welcome to Marketplace</Card.Title>
                <Card.Text style={{color:'white'}}>India's first product marketplace with advanced tools & apps to empower your every trade!</Card.Text>
                
            </Card.Body>
            
            
        </Card>
      
   
  )
}

export default Header
