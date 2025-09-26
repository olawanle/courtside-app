import React from 'react';
import './Page.css';

const About: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">About CourtSide</h1>
        <p className="page-description">
          CourtSide is the premier tennis training application designed to elevate your game 
          to professional levels. Our comprehensive platform combines cutting-edge technology 
          with expert tennis instruction to deliver personalized training experiences.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎥</div>
            <h3>Video Lessons</h3>
            <p>Learn from professional coaches with high-quality instructional videos covering all aspects of tennis.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your improvement with detailed analytics and personalized progress reports.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Interactive Drills</h3>
            <p>Practice with engaging drill cards designed to improve specific skills and techniques.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Achievement System</h3>
            <p>Stay motivated with our comprehensive achievement and milestone tracking system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
