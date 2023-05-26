import React from 'react';
import { Image } from 'react-bootstrap';
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import Header from '../Components/Header';

import { useState, useEffect } from 'react';
import axios from 'axios';

const Marketplace = () => {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter-data');
        if (Array.isArray(response.data.data.segments)) {
          const dataWithImages = response.data.data.segments.map((item, index) => ({
            ...item,
            image: getImageForIndex(index),
          }));
          setFilterData(dataWithImages);
        } else {
          console.log('api response is not an array', response.data);
        }
      } catch (error) {
        console.log('error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const getImageForIndex = (index) => {
    switch (index) {
      case 0:
        return pic1;
      case 1:
        return pic2;
      case 2:
        return pic3;
      case 3:
        return pic4;
      default:
        return '';
    }
  };

  return (
    <div>
      <Header/>
      {filterData.map(item => (
        <div className="container" key={item.id}>
          <div className="row">
            <div className="col-md-4 offset-md-2 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <Image src={item.image} className="img-fluid" />
                  <div>{item.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketplace;