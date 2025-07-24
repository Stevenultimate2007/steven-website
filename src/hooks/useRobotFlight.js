// src/hooks/useRobotFlight.js
import { useEffect } from 'react';

export default function useRobotFlight(robotStage, setRobotStage, setShowSpeech) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1 && robotStage === 1) {
        setRobotStage(2);
        setTimeout(() => {
          setRobotStage(3);
          setTimeout(() => setShowSpeech(true), 300);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [robotStage, setRobotStage, setShowSpeech]);
}
