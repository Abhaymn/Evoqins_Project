
import React from 'react';
import { Link ,Route,Routes} from 'react-router-dom';
import './App.css';
import { Container,  Navbar,Nav, Button } from 'react-bootstrap';
import {BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
// import DummyArray from './Pages/DummyArray';
import Marketplace from './Pages/Marketplace';
// import Login from './Pages/Login';
// import SignUp from './Pages/Signup';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Resources from './Pages/Resources';
import { Suspense } from 'react';
import Loading from './UI/Loading';


const DummyArray=React.lazy(()=>import('./Pages/DummyArray'));
const Login=React.lazy(()=>import('./Pages/Login'));
const SignUp=React.lazy(()=>import('./Pages/Signup'));
const About=React.lazy(()=>import('./Pages/About'));
const Contact=React.lazy(()=>import('./Pages/Contact'));
const Resources=React.lazy(()=>import('./Pages/Resources'));







function App() {
 
  return (
    <BrowserRouter>
   
      <Navbar bg="light" variant="light" >
        <Container className='navbar'>
          <Navbar.Brand className='fw fw-bold'>Evoque Innovative Lab</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link as={Link} to='/about' className="me-3" >About</Nav.Link>
              <Nav.Link as={Link} to='/' className="me-3">Marketplace</Nav.Link>
              <Nav.Link as={Link} to='/resouces' className="me-3">Resources</Nav.Link>
              <Nav.Link as={Link} to='/contact' className="me-3">Contact</Nav.Link>
            </Nav>
            <Button className='me-2' variant="outline-primary" as={Link} to='/login'>Login</Button>
            <Button as={Link} to='signup'>Sign Up</Button>

        </Container>
      </Navbar>
     
      <Suspense fallback={
        <div className='centered'>
          <Loading/>
        </div>
      }>
    
      <Routes>
      
      <Route path='/' element={<DummyArray/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resouces' element={<Resources/>}/>
      
      </Routes>
      </Suspense>
     
    </BrowserRouter>
  );
}

export default App;
