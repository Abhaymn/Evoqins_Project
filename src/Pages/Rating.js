import React from 'react'
import StarRatings from 'react-star-ratings'

const Rating = () => {
  return (
   <div >
    <h5 style={{fontSize:'10px' }} className='fw fw-bold'>Rating by</h5>
    <div className="row">
          <div className="col-md-2">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingRight:'50px' }}>
              
              <StarRatings
                rating={4}
                starRatedColor="gold"
                starEmptyColor="lightgray"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                changeRating={(newRating) => console.log(newRating)}
              />
              <StarRatings
                rating={3}
                starRatedColor="gold"
                starEmptyColor="lightgray"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                changeRating={(newRating) => console.log(newRating)}
              />
              <StarRatings
                rating={2}
                starRatedColor="gold"
                starEmptyColor="lightgray"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                changeRating={(newRating) => console.log(newRating)}
              />
              <StarRatings
                rating={1}
                starRatedColor="gold"
                starEmptyColor="lightgray"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                changeRating={(newRating) => console.log(newRating)}
              /> 
            </div>
          </div>
    </div>
    </div>
  )
}

export default Rating
