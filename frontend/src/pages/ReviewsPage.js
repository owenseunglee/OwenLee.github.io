import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ReviewList from '../components/ReviewList';
import { Link } from 'react-router-dom';

function ReviewsPage({ setReview }) {
    console.log('Rendering ReviewsPage'); 
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [reviews, setReviews] = useState([]);

    // RETRIEVE reviews
    const loadReviews = async () => {
        const response = await fetch('/reviews');
        const reviews = await response.json();
        setReviews(reviews);
    } 

    // EDIT a single review
    const onEditReview = async review => {
        setReview(review);
        redirect("/update");
    }

    // DELETE a single review  
    const onDeleteReview = async _id => {
        const response = await fetch(`/reviews/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/reviews');
            const reviews = await getResponse.json();
            setReviews(reviews);
        } else {
            console.error(`Failed to delete review = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the reviews
    useEffect(() => {
        loadReviews();
    }, []);

    // DISPLAY the reviews
    return (
        <>
            <h2>List of Reviews</h2>
            <p>Fill in the details about the reviews you want to see.</p>
            <Link to="/create">Add Review</Link>
            <ReviewList 
                reviews={reviews} 
                onEdit={onEditReview} 
                onDelete={onDeleteReview} 
            />
        </>
    );
}

export default ReviewsPage;