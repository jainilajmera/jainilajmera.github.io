import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import {
  FireNationCard,
  useKonamiCode,
} from "./components/FireNationEasterEgg";
import Fireballs from "./components/Fireballs";

function App() {
  const [showFireNation, setShowFireNation] = useState(false);

  const activateFireNation = useCallback(() => {
    setShowFireNation(true);
  }, []);

  useKonamiCode(activateFireNation);

  return (
    <>
      <Fireballs />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
      <AnimatePresence>
        {showFireNation && (
          <FireNationCard onClose={() => setShowFireNation(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
