import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { CreateVideo } from "./Components/pages/CreateVideo";
import { Title } from "./Components/Styled.Components";
import { ListVideo } from "./Components/ListVideos";
import { Player } from "./Components/pages/Player";

import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const url = "http://localhost:3300/videos";

function Home() {
  return <Title>Home</Title>;
}

function Users() {
  return <Title>Users</Title>;
}

function App() {
  const [videos, setVideos] = useState([]);
  const [state, setState] = useState(1);

  const getVideos = async () => {
    const rta = await axios.get(url);
    // console.log(rta)
    setVideos(rta.data.reverse());
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    getVideos();
  }, [state]);

  return (
    <BrowserRouter>
      <Title>Videos Favoritos</Title>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/videos"
          element={
            <ListVideo videos={videos} state={state} setState={setState} />
          }
        />
        <Route path="/users" element={<Users />} />
        <Route
          path="/new"
          element={<CreateVideo state={state} setState={setState} />}
        />
        <Route path="/view/:id" element={<Player videos={videos} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
