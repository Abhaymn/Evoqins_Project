import React from 'react'
import { Button, Image } from 'react-bootstrap'
import FooterImg from "../assets/footer.png";
import { Card } from 'react-bootstrap';
import classes from "./Header.module.css"

const Footer = () => {
    const cardStyle = {
        backgroundImage: `url(${FooterImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '250px',
        marginLeft: '85px',
        marginRight: '85px',
        marginBottom:'2rem'
      };
  return (
    <div>
      <Card style={cardStyle}>
        <Card.Body className={classes.heading}>
    
            <Card.Title style={{ fontWeight: 'bold', fontSize: '35px',color:'white' }} >Join the family today!</Card.Title>
            <Card.Text style={{color:'white'}}>Take advantage of the various products to build your own customized trading strategies.</Card.Text>
            <Button variant="light" style={{color:'#0080FF'}}>Open new account</Button>
        </Card.Body>
</Card>
    </div>
  )
}

export default Footer
