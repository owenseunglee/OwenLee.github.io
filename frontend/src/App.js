import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import ReviewsPage from './pages/ReviewsPage';
import AddReviewPageForm from './pages/AddReviewPageForm';
import EditReviewPageForm from './pages/EditReviewPageForm';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicPage';
import StaffPage from './pages/StaffPage';
import ContactForm from './pages/ContactPage';

function App() {

  const [review, setReviewToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <img src="android-chrome-192x192.png" alt="favicon" />
            <h1>Owen Lee Portfolio</h1>
            <p>This website is modified existing static website, so it runs in the React framework. It includes the frontend user interface for interacting with backend MongoDB collection to perform CRUD operations.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/reviewLog" element={<ReviewsPage setReview={setReviewToEdit}/>} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/create" element={<AddReviewPageForm />} />   
                    <Route path="/update" element={<EditReviewPageForm reviewToEdit={review} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy;2023 Owen Lee</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;