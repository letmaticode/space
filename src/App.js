import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from './pages/Crew'
import Technology from "./pages/Technology";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/space" element={<Home />} />
        <Route path="/space/destination/:id" element={<Destination />} />
        <Route path="/space/crew/:id" element={<Crew />} />
        <Route path="/space/technology/:id" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;