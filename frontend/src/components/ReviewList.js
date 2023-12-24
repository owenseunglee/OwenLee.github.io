import React from 'react';
import Review from './Review';

function ReviewList({ reviews, onDelete, onEdit }) {
    return (
        <table id="reviews">
            <caption>Add and Edit Reviews</caption>
            <thead>
                <tr>
                    <th>Restaurant</th>
                    <th>Review</th>
                    <th>Rating</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {reviews.map((review, i) => 
                    <Review
                        review={review} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ReviewList;
