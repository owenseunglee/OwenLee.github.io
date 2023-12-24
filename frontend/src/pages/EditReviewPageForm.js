import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditReviewPageForm = ({ reviewToEdit }) => {
 
    const [restaurant, setRestaurant] = useState(reviewToEdit.restaurant);
    const [review, setReview]         = useState(reviewToEdit.review);
    const [rate, setRate]             = useState(reviewToEdit.rate);
    const [date, setDate]             = useState(reviewToEdit.date.substring(0, 10));
    
    const redirect = useNavigate();

    const editReview = async () => {
        const response = await fetch(`/reviews/${reviewToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                restaurant: restaurant, 
                review: review, 
                rate: rate,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Review edited Successfully`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit review, status code = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a Review</h2>
            <p>Fill in the details about the review you want to edit.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which restaurant are you editing?</legend>
                    <label for="title">Restaurant</label>
                    <input
                        type="text"
                        value={restaurant}
                        onChange={e => setRestaurant(e.target.value)} 
                        id="restaurant" />
                    
                    <label for="review">Review</label>
                    <textarea
                        value={review}
                        onChange={e => setReview(e.target.value)} 
                        id="review" />

                    <label for="language">Rating</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={e => setRate(e.target.value)} 
                        id="rate" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value.date.toLocaleDateString("en-US"))}
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editReview}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditReviewPageForm;