import React, { Fragment, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Rating from './Rating';


const DummyArray = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const productList = [
    {
      name: 'Invest in ideas with Small case',
      description: 'Smallcases are investment products that help build a diversified, low-cost & long term portfolio.',
      price: 100,
      offer: 'Free',
    },
    {
      name: 'Buy Direct Funds at Zero Commission',
      description: 'Never depend on a single income, make an investment to create a second one with us.',
      price: 1000,
      offer: 500,
    },
    {
      name: 'Indias First Option trading Platform',
      description: 'You can trade options just by knowing the stock and its direction.',
      price: 399,
      offer: 199,
    },
    {
      name: 'Intraday based Semi Algo Trading Platform',
      description: 'Optimum gives Buy above and Sell below levels for Stock Cash, Futures and MCX Markets.',
      price: 399,
      offer: 'Free',
    },
  ];

  const filteredProductList = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fragment>
    <Header />

    
 
    <div className="container " >
    
      <div className="row">
        <div className="col-md-4  mb-4 mt-5">
          <input
            type="text"
            placeholder="Search by products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
       
      </div>
      
      <div>
      <Rating/>
    <div className='col-md-8 offset-md-4 '  >
   
    
      <div className="row">
     
        <div className="col-md-6 mb-4" >
          {filteredProductList.slice(0, 2).map((product, index) => (
            <div className="card mb-4" key={index}>
              <div className="card-body">
              
                <Image src={getImageByIndex(index)} className="img-fluid" />
                <h5 className="card-title fw fw-bold" style={{ fontSize: '12px' }}>
                  {product.name}
                </h5>
                <p style={{ fontSize: '10px' }}>{product.description}</p>
                <p className="card-text" style={{ fontSize: '14px' }}>
                  Price: ₹{product.price} per smallcase (buy)
                </p>
                <p className="card-text" style={{ fontSize: '11px' }}>
                  Offer Price: ₹{product.offer} for customers
                </p>
              </div>
              <div
                className="d-flex justify-content-between align-items-center ml-4"
                style={{ marginLeft: '1rem', marginRight: '1rem' }}
              >
                <Button className="mb-2">View More Details</Button>
                <Button variant="outline-primary" className="mb-2">
                  Open an account
                </Button>
              </div>
            </div>
          ))}
          
        </div>
       

        <div className="col-md-6 mb-4">
          {filteredProductList.slice(2).map((product, index) => (
            <div className="card mb-4" key={index}>
              <div className="card-body">
                <Image src={getImageByIndex(index + 2)} className="img-fluid" />
                <h5 className="card-title fw fw-bold" style={{ fontSize: '12px' }}>
                  {product.name}
                </h5>
                <p style={{ fontSize: '10px' }}>{product.description}</p>
                <p className="card-text" style={{ fontSize: '14px' }}>
                  Price: ₹{product.price} per smallcase (buy)
                </p>
                <p className="card-text" style={{ fontSize: '11px' }}>
                  Offer Price: ₹{product.offer} for customers
                </p>
              </div>
              <div
                className="d-flex justify-content-between align-items-center ml-4"
                style={{ marginLeft: '1rem', marginRight: '1rem' }}
              >
                <Button className="mb-2">View More Details</Button>
                <Button variant="outline-primary" className="mb-2">
                  Open an account
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
    
    <Footer />
  </Fragment>
);
  
};

const getImageByIndex = (index) => {
  const images = [pic1, pic2, pic3, pic4];
  return images[index];
};

export default DummyArray;