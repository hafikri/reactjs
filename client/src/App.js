import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddPlayers from "./pages/add-players.page";
import EditPlayers from "./pages/edit-players.page";
import Home from "./pages/home.page";
// import { BtnForm } from "./component/button.component";
// import { FrmInput } from "./component/form-input.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playerAdd" element={<AddPlayers />} />
        <Route path="/playerEdit" element={<EditPlayers />} />
      </Routes>
    </BrowserRouter>
    // <div className="container d-flex align-items-center">
    //   <form className="card p-5">
    //     <FrmInput />
    //     <BtnForm />
    //   </form>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <FrmInput />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
