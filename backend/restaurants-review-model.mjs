// Models for the Movie Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: `Failed to open database: ${err.message}` });
    } else  {
        console.log('Database was successfully opened.');
    }
});

// SCHEMA: Define the collection's schema.
const reviewSchema = mongoose.Schema({
	restaurant:    { type: String, required: true },
	review:        { type: String, required: true },
    rate:          { type: Number, required: true },
	date:          { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "movies".
const reviews = mongoose.model('Reviews', reviewSchema);


// CREATE model *****************************************
const createReview = async (restaurant, review, rate, date) => {
    const reviewItem = new reviews({ 
        restaurant: restaurant, 
        review: review, 
        rate: rate,
        date: date 
    });
    return reviewItem.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveReviews = async () => {
    const query = reviews.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveReviewByID = async (_id) => {
    const query = reviews.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteReviewById = async (_id) => {
    const result = await reviews.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateReview = async (_id, restaurant, review, rate, date) => {
    const result = await reviews.replaceOne({_id: _id }, {
        restaurant: restaurant,
        review: review,
        rate: rate,
        date: date
    });
    return { 
        _id: _id,
        restaurant: restaurant, 
        review: review,
        rate: rate,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createReview, retrieveReviews, retrieveReviewByID, updateReview, deleteReviewById }