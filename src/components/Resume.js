import React from 'react';
import './Resume.css'

function Resume() {
  return (
    <div className="container">
      <div className="title">
        <h1>Mathew Akre</h1>
      </div>
      <div className="summary">
        <h3>Summary:</h3>
        <ul>
          <li>Full-Stack Developer able to build a Web presence and Mobile application from the ground up.</li>
          <li>Skilled at writing testable and efficient code using current best practices in Web development.</li>
          <li>Hard worker, team player and quick learner who is proficient in multiple scripting languages and frameworks.</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Experience:</h3>
        <p>Hovrtek (August 2019 – September 2019)</p>
        <p>Portland, Oregon</p>
        <p>Full-Stack Developer Intern</p>
        <ul>
          <li>Improved the user-experience (UX) for a social media mobile app that was shown to investors.  The technology used were React Native, Google Places API and Firebase database.</li>
          <li>Redesigned social media mobile app using a custom personal server using MongoDB and React Native.</li>
        </ul>
        <p>Flying Pie Pizzeria (June 2016 – October 2016)</p>
        <p>Gresham, Oregon</p>
        <p>Dishwasher</p>
        <ul>
          <li>Cleaned dishes in a timely manner.</li>
          <li>Created top quality pizza in a fast-paced environment.</li>
        </ul>
        <p>Head Basketball Coach (November 2013 – March 2014)</p>
        <p>Gresham, Oregon</p>
        <p>Head Coach</p>
        <ul>
          <li>Coached an 11-12 year old boys basketball team.</li>
          <li>Helped develop life skills by teaching teamwork, discipline and fun. </li>
          <li>Communicated the schedule to parents and players.</li>
          <li>Developed a strategy and game plan for games.</li>
        </ul>
      </div>
      <div className="education">
        <h3>Education:</h3>
      </div>

    </div>
  )
}

export default Resume;