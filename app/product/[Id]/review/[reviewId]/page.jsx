import { notFound } from 'next/navigation';
import React from 'react';

const Review = ({params}) => {
    const {Id,reviewId}=params;
    if(reviewId>4){
        notFound()
    }
    return (
        <div>
            Product Id : {Id} and reviewId : {reviewId}
        </div>
    );
};

export default Review;