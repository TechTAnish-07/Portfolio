import React, { useEffect, useRef } from 'react';
import './WaterWave.css'; // We will create this CSS file next

const WaterWave = ({ text }) => {
  const waveRef = useRef(null);

  useEffect(() => {
    const icon = waveRef.current;
    if (icon) {
      // Use a regular expression to find the number in the text
      const percentageMatch = text.match(/(\d+)/);
      
      if (percentageMatch) {
        const percentage = percentageMatch[0];
        // Set the --water-level CSS custom property
        icon.style.setProperty('--water-level', `${percentage}%`);
      }
    }
  }, [text]); // Re-run the effect if the text prop changes

  return (
    <div className="water-wave-container" ref={waveRef}>
      <span>{text}</span>
    </div>
  );
};

export default WaterWave;