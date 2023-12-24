// Controllers for the Review Collection

import 'dotenv/config';
import express from 'express';
import * as reviews from './restaurants-review-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/reviews', (req,res) => { 
    reviews.createReview(
        req.body.restaurant, 
        req.body.review, 
        req.body.rate,
        req.body.date
        )
        .then(review => {
            console.log(`"${review.restaurant}" was added to the collection.`);
            res.status(201).json(review);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `Review creation failed: ${error.message}.` });
        });
});


// RETRIEVE controller ****************************************************
app.get('/reviews', (req, res) => {
    reviews.retrieveReviews()
        .then(reviews => { 
            if (reviews !== null) {
                console.log(`All reviews were retrieved from the collection.`);
                res.json(reviews);
            } else {
                res.status(404).json({ Error: 'No reviews were found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `Failed to retrieve reviews: ${error.message}` });
        });
});


// RETRIEVE by ID controller
app.get('/reviews/:_id', (req, res) => {
    reviews.retrieveReviewByID(req.params._id)
    .then(review => { 
        if (review !== null) {
            console.log(`"${review.restaurant}" was retrieved, based on its ID.`);
            res.json(review);
        } else {
            res.status(404).json({ Error: 'No review was found with the provided ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `Failed to retrieve review: ${error.message}` });
    });
});


// UPDATE controller ************************************
app.put('/reviews/:_id', (req, res) => {
    reviews.updateReview(
        req.params._id, 
        req.body.restaurant,
        req.body.review, 
        req.body.rate, 
        req.body.date
    )
    .then(review => {
        console.log(`"${review.restaurant}" was updated.`);
        res.json(review);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `Failed to update the review: ${error.message}` });
    });
});


// DELETE Controller ******************************
app.delete('/reviews/:_id', (req, res) => {
    reviews.deleteReviewById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} review was deleted.`);
                res.status(200).send({ Success: 'Review was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'No review was found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: `Failed to delete review: ${error.message}` });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});