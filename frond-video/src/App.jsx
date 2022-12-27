import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { CreateVideo } from "./Components/pages/CreateVideo";
import { Title } from "./Components/Styled.Components";
import { ListVideo } from "./Components/ListVideos";
import { Player } from "./Components/pages/Player";

import "./app.css";
import { ToastContainer, toast } from "react-toastify";
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
  const [videos, setVideos] = useState(null);
  const [state, setState] = useState(1);
  const [err, setErr] = useState(null);

  const getVideos = async () => {
    try {
      const rta = await axios.get(url);
      // console.log(rta)
      setVideos(rta.data.reverse());
    } catch (error) {
      console.log("Ups, Error:", error);
      toast.error(error.message);
      setErr(error.message)
    }
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
      <NavBar videos={videos} />
      <Routes>
        <Route path="/" element={<Navigate to="/videos"/>} />
        <Route
          path="/videos"
          element={
            <ListVideo videos={videos} state={state} setState={setState} err={err} setErr={setErr}/>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route
          path="/new/:id"
          element={<CreateVideo state={state} setState={setState} />}
        />
        <Route path="/view/:id" element={<Player videos={videos} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
