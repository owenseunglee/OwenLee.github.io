import React from 'react';

function Row({ results }) {
    return (
    <tr>
        <td>
        <img src={results.picture.thumbnail} alt="User Thumbnail" />
        </td>
        <td>
        <a href={`mailto:${results.email}`}>
            {results.name.first} {results.name.last}
        </a>
        </td>
        <td>{results.phone}</td>
        <td>{results.location.city}</td>
    </tr>
    );
}

export default Row;