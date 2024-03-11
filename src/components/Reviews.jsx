import React from 'react'
import { reviews } from '../arrays_files/reviews'
import star from '../content/star.svg'

export default function Reviews() {
    let reviewArr = reviews.slice(0,4)
  return (
    <div className='reviews'>
        {reviewArr.map((review, index)=>(
            <div key={review.id} className='review'>
                <p className='name'>{review.name}</p>
                <p>{review.review}</p>
                <p className='rate'><img src={star} width='15px' alt="" />{review.rating}</p>
            </div>
        ))}
    </div>
  )
}
