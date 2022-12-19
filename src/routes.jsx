import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import GameInfo from "./pages/GameInfo/GameInfo";
import Review from "./pages/GameReview/GameReview";
import User from "./pages/RegisterUser/RegisterUser";
import LoginUser from "./pages/LoginUser/LoginUser";
import AllGames from "./pages/AllGames/AllGames";
import RegisterGame from "./pages/RegisterGame/RegisterGame";
import ProtectRoute from "./ProtectRoute";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/plataform/:id" exact element={<Games />} />
        <Route path="/Game/:id" exact element={<GameInfo />} />
        <Route path="/AllGames" exact element={<AllGames />} />
        <Route
          path="/Game/CreateReview/:id"
          exact
          element={
            <ProtectRoute>
              <Review />
            </ProtectRoute>
          }
        />
        <Route path="/Login" exact element={<LoginUser />} />
        <Route path="/Register" exact element={<User />} />
        <Route
          path="/RegisterGame"
          exact
          element={
            <ProtectRoute>
              <RegisterGame/>
            </ProtectRoute>
          }
        />
      </Routes>
    </Router>
  );
}
