import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { CreateVideo } from "./Components/pages/CreateVideo";
import { Title } from "./Components/Styled.Components";
import { ListVideo } from "./Components/ListVideos";
import { Player } from "./Components/pages/Player";
import { Login } from "./Components/pages/Login";
import { Logout } from './Components/pages/Logout';
import { Profile } from "./Components/pages/Profile";
import { getVideosByUserId } from "./services/serviceVideo";

import "./app.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [videos, setVideos] = useState(null);
  const [state, setState] = useState(1);
  const [err, setErr] = useState(null);
  const { isAuthenticated, user } = useAuth0();

  const getVideos = async () => {
    try {
      const userId = user.sub;
      const res = await getVideosByUserId(userId);
      setVideos(res.reverse());
    } catch (error) {
      console.log("Ups, Error:", error);
      toast.error(error.message);
      setErr(error.message);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      getVideos();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    getVideos();
  }, [state]);

  return (
    <BrowserRouter>
      <Title>Videos Favoritos</Title>
      <NavBar videos={videos} />
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/videos" />} />
            <Route
              path="/videos"
              element={
                <ListVideo
                  videos={videos}
                  state={state}
                  setState={setState}
                  err={err}
                  setErr={setErr}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/new/:id"
              element={<CreateVideo state={state} setState={setState} />}
            />
            <Route path="/view/:id" element={<Player videos={videos} />} />
            <Route path="/logout" element={<Logout />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
