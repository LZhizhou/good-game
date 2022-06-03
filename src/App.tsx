import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/game-page";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/404" element={<NoMatch />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
