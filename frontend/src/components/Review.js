import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Review({ review, onEdit, onDelete }) {
    return (
        <tr>
            <td>{review.restaurant}</td>
            <td>{review.review}</td>
            <td>{review.rate}</td>
            <td>{review.date}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(review._id)} /></td>
            <td><MdEdit onClick={() => onEdit(review)} /></td>
        </tr>
    );
}

export default Review;