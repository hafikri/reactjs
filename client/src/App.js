import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AddPlayers } from "./pages/add-players.page";
// import EditPlayers from "./pages/edit-players.page";
import Home from "./pages/home.page";
// import { BtnForm } from "./component/button.component";
// import { FrmInput } from "./component/form-input.component";

const App = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: "fikri",
      email: "fikri@binar.com",
      password: "123456",
      experience: 75,
      lvl: 25,
    },
    {
      id: 2,
      username: "alhafid",
      email: "alhafid@binar.com",
      password: "123456",
      experience: 89,
      lvl: 45,
    },
    {
      id: 3,
      username: "anto",
      email: "anto@binar.com",
      password: "123456",
      experience: 92,
      lvl: 49,
    },
  ]);

  const [tmpPlayer, setTmpPlayer] = useState({
    username: "",
    email: "",
    password: "",
    experience: "",
    lvl: "",
  });

  const addPlayer = () => {
    setPlayers([
      ...players,
      {
        id: Date.now(),
        username: tmpPlayer.username,
        email: tmpPlayer.email,
        password: tmpPlayer.password,
        experience: tmpPlayer.experience,
        lvl: tmpPlayer.lvl,
      },
    ]);
    setTmpPlayer({
      username: "",
      email: "",
      password: "",
      experience: "",
      lvl: "",
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home players={players} />} />
        <Route
          path="/playerAdd"
          element={
            <AddPlayers
              addPlayer={addPlayer}
              setTmpPlayer={setTmpPlayer}
              tmpPlayer={tmpPlayer}
            />
          }
        />
        <Route path="/playerEdit" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
