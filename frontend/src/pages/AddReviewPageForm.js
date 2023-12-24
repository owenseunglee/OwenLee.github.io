import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
export const AddReviewPageForm = () => {

    const [restaurant, setRestaurant]       = useState('');
    const [review, setReview]               = useState('');
    const [rate, setRate]                   = useState('');
    const [date, setDate]                   = useState('');
    
    const redirect = useNavigate();

    const addReview = async () => {
        const newReview = { restaurant, review, rate, date };
        const response = await fetch('/reviews', {
            method: 'post',
            body: JSON.stringify(newReview),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Review Added Successfully`);
            redirect("/");
        } else {
            alert(`Failed to add review, status code = ${response.status}`);
            redirect("/");
        }
    };

    return (
        <>
        <article>
            <h2>Add a Review</h2>
            <p>Fill in the details about the review you want to add.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which restaurant are you adding?</legend>
                    <label htmlFor="title">Restaurant</label>
                    <input
                        type="text"
                        placeholder="Name of the restaurant"
                        value={restaurant}
                        onChange={e => setRestaurant(e.target.value)} 
                        id="restaurant" />
                    
                    <label htmlFor="review">Review</label>
                    <textarea
                        value={review}
                        placeholder="Your review"
                        onChange={e => setReview(e.target.value)} 
                        id="review" />

                    <label htmlFor="rate">Rating</label>
                    <input
                        type="number"
                        placeholder="Rating"
                        value={rate}
                        onChange={e => setRate(e.target.value)} 
                        id="rate" />

                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        id="date" />

                    <label htmlFor="submit">
                        Click Add Review
                        <button type="submit" onClick={addReview} id="submit">Add Review</button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddReviewPageForm;