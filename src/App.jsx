import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- hinzugefügt
import Loader from './components/Loader';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'; 
import Portfolio from './components/Portfolio';
import Pricing from './components/pricing';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import Robot from './components/Robot';
import RobotSpeech from './components/RobotSpeech';
import useRobotFlight from './hooks/useRobotFlight';
import { motion } from 'framer-motion';
import Approach from './components/Approach';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Footer from './components/Footer';

function AppContent() {
  const [loaded, setLoaded] = useState(false);
  const [robotStage, setRobotStage] = useState(1);
  const [landingPos, setLandingPos] = useState({ x: 150, y: 800 });
  const [showSpeech, setShowSpeech] = useState(false);

  const location = useLocation(); // <-- Aktueller Pfad
  const { t } = useTranslation(); // <-- Übersetzungsfunktion

  useRobotFlight(robotStage, setRobotStage, setShowSpeech);

  const positions = {
    1: { x: 120, y: window.innerHeight / 3, scale: 1, rotate: 0 },
    2: {
      x: [120, 250, window.innerWidth / 2],
      y: [
        window.scrollY + window.innerHeight / 3,
        window.scrollY + window.innerHeight / 2,
        window.scrollY + window.innerHeight - 350,
      ],
      scale: 1.2,
      rotate: [0, 20, -10],
    },
    3: { x: landingPos.x, y: landingPos.y, scale: 1, rotate: 0 },
  };

  return (
    <div className="relative">
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Header />

          {/* Roboter nur auf Startseite */}
          {location.pathname === "/" && (
            <>
              <motion.div
                className="absolute z-50 pointer-events-none"
                style={{ top: 0, left: 0 }}
                animate={positions[robotStage]}
                transition={{ duration: robotStage === 2 ? 2 : 1, ease: 'easeInOut' }}
              >
                <Robot stage={robotStage} />
              </motion.div>
              {robotStage === 3 && showSpeech && (
                <RobotSpeech 
                  landingPos={landingPos}
                  lines={t("robotSpeech.lines", { returnObjects: true })} // <-- Korrigiert
                />
              )}
            </>
          )}

          <Routes>
            {/* Hauptseite */}
            <Route
              path="/"
              element={
                <>
                  <Hero stage={robotStage} />
                  <AboutMe />
                  <Portfolio robotStage={robotStage} onLandingPosition={setLandingPos} />
                  <Pricing />
                  <Approach />
                  <Contact />
                </>
              }
            />
            {/* Neue Seiten */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>

          <WhatsAppButton />
          <Footer />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
