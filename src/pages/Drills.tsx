import React from 'react';
import './Page.css';

const Drills: React.FC = () => {
  const drills = [
    {
      id: 1,
      title: 'Forehand Power Drive',
      difficulty: 'Intermediate',
      duration: '15 min',
      description: 'Master the fundamentals of powerful forehand strokes with proper form and technique.',
      category: 'Technique'
    },
    {
      id: 2,
      title: 'Serve Accuracy Challenge',
      difficulty: 'Advanced',
      duration: '20 min',
      description: 'Improve your serving precision and consistency with targeted practice drills.',
      category: 'Serving'
    },
    {
      id: 3,
      title: 'Backhand Stability',
      difficulty: 'Beginner',
      duration: '12 min',
      description: 'Build confidence in your backhand with progressive stability exercises.',
      category: 'Technique'
    },
    {
      id: 4,
      title: 'Court Movement Agility',
      difficulty: 'Intermediate',
      duration: '18 min',
      description: 'Enhance your court positioning and movement speed with dynamic drills.',
      category: 'Footwork'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#F44336';
      default: return '#00ffff';
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Training Drills</h1>
        <p className="page-description">
          Elevate your tennis skills with our comprehensive collection of interactive drills. 
          Each drill is designed to target specific aspects of your game and help you progress systematically.
        </p>
        
        <div className="drills-grid">
          {drills.map((drill) => (
            <div key={drill.id} className="drill-card">
              <div className="drill-header">
                <div className="drill-category">{drill.category}</div>
                <div 
                  className="drill-difficulty" 
                  style={{ backgroundColor: getDifficultyColor(drill.difficulty) }}
                >
                  {drill.difficulty}
                </div>
              </div>
              
              <h3 className="drill-title">{drill.title}</h3>
              <p className="drill-description">{drill.description}</p>
              
              <div className="drill-footer">
                <span className="drill-duration">⏱️ {drill.duration}</span>
                <button className="drill-start-btn">Start Drill</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drills;