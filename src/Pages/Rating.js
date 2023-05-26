import React from 'react'
import StarRatings from 'react-star-ratings'

const Rating = () => {
  return (
   <div >
    <h5 style={{fontSize:'10px' }} className='fw fw-bold'>Rating by</h5>
    <div style={{fontSize:'10px' }} >
      <StarRatings
        rating={4}
        starRatedColor="gold"
        starEmptyColor="lightgray"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
        changeRating={(newRating) => console.log(newRating)}
      /> &above
    </div>
    <div style={{fontSize:'10px' }}>
      <StarRatings
        rating={3}
        starRatedColor="gold"
        starEmptyColor="lightgray"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
        changeRating={(newRating) => console.log(newRating)}
      /> &above
    </div>
    <div style={{fontSize:'10px' }}>
      <StarRatings
        rating={2}
        starRatedColor="gold"
        starEmptyColor="lightgray"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
        changeRating={(newRating) => console.log(newRating)}
      /> &above
    </div>
    <div style={{fontSize:'10px' }}>
      <StarRatings
        rating={1}
        starRatedColor="gold"
        starEmptyColor="lightgray"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
        changeRating={(newRating) => console.log(newRating)}
      /> &above
    </div>
    </div>
  )
}

export default Rating
