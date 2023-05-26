import React from 'react'
import { Container, Row,Col, Card, Form, Button } from 'react-bootstrap';

const SignUp= (props) => {
    
  return (
    <div>
       <Container className='mt-5 d-flex justify-content-center' >
        <Row >
            <Col xs={19}>
                <Card className='shadow-lg mt-5 p-4' >
                    <Card.Header className=' d-flex justify-content-center' >
                        <h4>SignUp</h4>
                    </Card.Header>
                    
                    <Card.Body>
       
                <Form   >
                <Form.Control className='mb-3 ' type='email' placeholder='Email'  required />
                <Form.Control className='mb-3'
                    type='password'
                    placeholder='Password'
                     required
                />
                
                    <Form.Control className='mb-3'
                        type='password'
                        placeholder='Confirm Password'
                         required
                    />
               
                <div className='d-flex justify-content-center'>
                    <Button type='submit' >SignUp</Button>
                </div>
                </Form>
                
                
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default SignUp
