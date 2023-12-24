import React, { useState } from 'react';

function ContactForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [helpedBefore, setHelpedBefore] = useState("");
    const [method, setMethod] = useState({
        zoom: false,
        inPerson: false
    });
    const [availability, setAvailability] = useState({
        weekdays: false,
        weekends: false
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(firstname, lastname, email, message, subject, grade, helpedBefore, method, availability);
        // Here you would typically send the data somewhere
    }

    return (
        <section>
            <h2>Contact</h2>
            <p>Please fill out the form below and I will contact you as soon as possible.</p>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>Contact Information</legend>
                    <p>{"\u002A"} Required</p>
                    <label htmlFor="name" className="required">First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First" autofocus required value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <label htmlFor="name" className="required">Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Last" required value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <label htmlFor="email" className="required">Email</label>
                    <input type="email" id="eaddress" name="email" placeholder="abcd@host.com" pattern="[^ @]+@[^ @]+.[a-z]+" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="usermessage" placeholder="Please Leave Your Message Here" maxlength="300" value={message} onChange={(e) => setMessage(e.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>Reason of Contact</legend>
                    <label htmlFor="subjectSelection">Which subject do you need help with?</label>
                    <select name="subject" id="help" value={subject} onChange={(e) => setSubject(e.target.value)}>
                        <option>--Choose One--</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Math">Math</option>
                        <option value="History">History</option>
                        <option value="English">English</option>
                        <option value="Physics">Physics</option>
                    </select>
                    <label htmlFor="gradeSelection">Which school grade are you currently in? </label>
                    <select name="grade" id="school" value={grade} onChange={(e) => setGrade(e.target.value)}>
                        <option>--Choose One--</option>
                        <option value="Elementary School">Elementary School</option>
                        <option value="Middle School">Middle School</option>
                        <option value="High School">High School</option>
                    </select>
                    <label htmlFor="helpedbefore">Is this your first time getting tutored?</label>
                    <input type="radio" name="been helped" id="yes" value="Yes" checked={helpedBefore === 'Yes'} onChange={(e) => setHelpedBefore(e.target.value)} />
                    <label for="yes">Yes</label>
                    <input type="radio" name="never been helped" id="no" value="No" checked={helpedBefore === 'No'} onChange={(e) => setHelpedBefore(e.target.value)} />
                    <label for="no">No</label>
                    <label htmlFor="method">Preferred Tutoring Method <i>(Check both for either)</i></label>
                    <label htmlFor="zoom">
                        <input type="checkbox" name="online" id="zoom" value="remote" checked={method.zoom} onChange={(e) => setMethod({...method, zoom: e.target.checked})} />
                        Zoom
                    </label>
                    <label htmlFor="in-person">
                        <input type="checkbox" name="in-person" id="person" value="non-remote" checked={method.inPerson} onChange={(e) => setMethod({...method, inPerson: e.target.checked})} />
                        In-Person
                    </label>
                    <label htmlFor="availability">Availability <i>(Check both for either)</i></label>
                    <label htmlFor="weekdays">
                        <input type="checkbox" name="weekdays" id="weekdays" value="weekdays" checked={availability.weekdays} onChange={(e) => setAvailability({...availability, weekdays: e.target.checked})} />
                        Weekdays
                    </label>
                    <label htmlFor="weekends">
                        <input type="checkbox" name="weekends" id="weekends" value="weekends" checked={availability.weekends} onChange={(e) => setAvailability({...availability, weekends: e.target.checked})} />
                        Weekends
                    </label>
                    <button>Submit Review</button>
                </fieldset>
            </form>
        </section>
        );
}

export default ContactForm;