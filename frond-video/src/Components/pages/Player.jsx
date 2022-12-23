import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { generateRandomId } from "../../helpers/func.navbar";

function Player({ videos }) {
  console.log("🚀 ~ file: NavBar.jsx:5 ~ NavBar ~ videos", videos);
  const { id } = useParams();
  const nav = useNavigate();
  const [video, setVideo] = useState(null);
  const idVideo = Number(id);

  function endVideo() {
    console.log("End!!!!!!");
    nav("/videos");
  }

  useEffect(() => {
    const newId = generateRandomId(videos);
    if (!idVideo) {
      setVideo(videos.find((v) => v.id === newId));
    } else {
      setVideo(videos.find((v) => v.id === idVideo));
    }
    return () => {
      setVideo(null);
    };
  }, []);

  return (
    <div className="box-player">
      <div className="player-wrapper">
        {video && (
          <ReactPlayer
            className="react-player"
            url={video.url}
            width="100%"
            height="100%"
            style={{ maxHeight: "75vh" }}
            onEnded={endVideo}
          />
        )}
      </div>
      <p></p>
    </div>
  );
}

export { Player };
