import React, { useState, useEffect } from "react";
import axios from "axios";
import { VideoItem } from "./VideoItem";
import { Title, Box, Button } from "./Styled.Components";
const url = "http://localhost:3300/videos";

function ListVideo({ videos, state, setState, err, setErr }) {
    // const [videos, setVideos] = useState([]);
    // const [state, setState] = useState(1);
    
    function handClickleReload() {
        window.location.reload();
    }
    
  // const getVideos  = async () => {
  //     const rta = await axios.get(url)
  //     setVideos(rta.data)
  // }

  // useEffect(() => {
  //     getVideos()
  // }, [])

  // useEffect(() => {
  //     getVideos()
  // }, [state])

  return (
    <div className="videos">
      <Title>Mis videos</Title>
      {err && <Box>{err}</Box>}
      <br />
      {err && (
        <Box>
          <Button
            style={{ width: "30%", minWidth: "120px", maxWidth: "220px" }}
            onClick={handClickleReload}
          >
            Reload
          </Button>
        </Box>
      )}
      <ul className="list">
        {!videos && !err ? "Cargandor..." : null}
        {videos &&
          videos.map((el) => (
            <VideoItem
              key={el.id}
              id={el.id}
              name={el.name}
              url={el.url}
              create_at={el.create_at}
              setState={setState}
              state={state}
            />
          ))}
      </ul>
    </div>
  );
}

export { ListVideo };
