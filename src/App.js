import { Routes,Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Games from "./pages/Games";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Sudoku from "./components/Sudoku/Sudoku";
import G2048 from "./components/2048/G2048";

import BigSquare from "./components/15/BigSquare";


function App() {



  return (
    
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Games" element={<Games/>}></Route>
        <Route path="Leaderboard" element={<Leaderboard/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="sudoku" element={<Sudoku/>}></Route>
        <Route path="2048" element={<G2048/>}></Route>
        
        <Route path="game15" element={<BigSquare/>}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
