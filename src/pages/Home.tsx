import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Become a Tennis Master: Elevate Your Game with Our Comprehensive Mobile Guide
            </h1>
            <p className="hero-description">
              Unlock your full potential on the tennis court with our cutting-edge mobile app. 
              Featuring video lessons, interactive drills, and personalized progress tracking, 
              our platform empowers you to master the fundamentals, stay ahead of the trends, 
              and achieve your tennis goals
            </p>
            <button className="cta-button">
              Join the Journey
            </button>
          </div>
          <div className="hero-image">
            <div className="player-circle">
              <div className="tennis-player">
                {/* Placeholder for tennis player image */}
                <div className="player-placeholder">🎾</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach New Heights Section */}
      <section className="reach-heights">
        <div className="section-container">
          <h2 className="section-title">Reach New Heights</h2>
          <p className="section-description">
            Discover the secrets to elevating your tennis game with our cutting-edge mobile app. 
            Dive into video lessons, engage in targeted drills, and track your progress as you 
            become a true tennis champion
          </p>
          <button className="section-cta">
            Join the Journey
          </button>
        </div>
      </section>

      {/* Tennis Lifestyle Section */}
      <section className="tennis-lifestyle">
        <div className="section-container">
          <h2 className="section-title">Embrace the Tennis Lifestyle</h2>
          <div className="mobile-mockups">
            <div className="mobile-device">
              <div className="mobile-screen">
                <div className="app-interface">
                  <h3>Player Profile</h3>
                  <div className="player-stats">
                    <div className="stat-item">
                      <span className="stat-label">Matches</span>
                      <span className="stat-value">24</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Win Rate</span>
                      <span className="stat-value">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-device">
              <div className="mobile-screen">
                <div className="app-interface">
                  <h3>Training Stats</h3>
                  <div className="progress-chart">
                    <div className="chart-placeholder">📊</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="section-cta explore-btn">
            Explore the App
          </button>
        </div>
      </section>

      {/* Unleash Potential Section */}
      <section className="unleash-potential">
        <div className="section-container">
          <h2 className="section-title">Unleash Your Potential</h2>
          <h3 className="section-subtitle">Reach New Heights</h3>
          <p className="section-description">
            Discover the secrets to elevating your tennis game with our cutting-edge mobile app. 
            Dive into video lessons, engage in targeted drills, and track your progress as you 
            become a true tennis champion
          </p>
          <button className="section-cta">
            Join the Journey
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="section-container">
          <h2 className="section-title">Become a Tennis Powerhouse with Our</h2>
          <p className="section-description">
            Unlock the full potential of your tennis game with our premium app. 
            Featuring interactive drills, progress visualizations, and smooth animations, 
            this is the ultimate tool for serious athletes looking to take their skills to new
          </p>
          <button className="section-cta elite-btn">
            Join the Elite
          </button>
          
          <div className="feature-highlight">
            <div className="feature-icon">🏆</div>
            <div className="feature-text">
              <h4>Elevate Your</h4>
              <p>Maximize Your Training</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
