import React, { useState } from 'react';
import Row from '../components/StaffRow';

function StaffPage() {
    const [results, setResults] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [failureMessage, setFailureMessage] = useState('');
    
    const fetchData = () => {
        const url = 'https://randomuser.me/api/';
        
        fetch(url)
        .then(response => {
            if (response.ok) {
                setSuccessMessage('Data fetched successfully');
                return response.json();
            } else {
                setFailureMessage('Failed to fetch data');
                throw new Error('Failed to fetch Data');
            }
        })
        
        .then(data => {
            setResults(prevResults => prevResults.concat(data.results[0]));
        })

        .catch(error => {
            console.error(error);
        });
    };
    
    return (
    <section>
        <h2>
            <strong>Staff List</strong>
            </h2>
            <article>
                <p>
                    Click the button to fetch data for one staff member at a time from the{' '}
                    <a href="https://randomuser.me/documentation">Random User Generator</a> API.
                </p>
                <p>If the service is down, then a status message will appear in the aside at the right.</p>
                <p>Every 10 clicks of the button will reveal statistics in the console.</p>
                <aside>
                    <h4>API Service Status:</h4>
                    <p id="successMessage">{successMessage}</p>
                    <p id="failureMessage">{failureMessage}</p>
                </aside>
                <table>
                    <caption>List your Colleagues</caption>
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Name & Email</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                        <Row key={index} results={result} />
                        ))}
                    </tbody>
                </table>
                <button onClick={fetchData}>Fetch Data</button>
            </article>
    </section>
            );
}

export default StaffPage;