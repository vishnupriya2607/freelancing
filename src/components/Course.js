import React from 'react';
import Header from './Header'; // Assuming you named the header component as Header
import Footer from './Footer'; // Assuming you named the footer component as Footer

const Courses = () => {
  return (
    <div className="course-page">
      <Header />

      <header className="course-header">
        <h1>Freelancer Courses</h1>
        <p>Your gateway to a successful freelancing career.</p>
      </header>

      <section id="courses">
        <h2>Our Courses</h2>
        <div className="course">
          <h3>Introduction to Freelancing</h3>
          <p>Learn the basics of freelancing, how to find clients, and build your portfolio.</p>
          <button>Enroll Now</button>
        </div>
        <div className="course">
          <h3>Building Your Brand</h3>
          <p>Understand how to create a personal brand that stands out in the freelancing market.</p>
          <button>Enroll Now</button>
        </div>
        <div className="course">
          <h3>Advanced Freelancing Techniques</h3>
          <p>Master the art of negotiation, pricing, and scaling your freelance business.</p>
          <button>Enroll Now</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
