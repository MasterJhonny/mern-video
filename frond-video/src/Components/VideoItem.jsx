import React from "react";
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { toast } from 'react-toastify';

function VideoItem({ id, name, url, create_at, setState, state}) {

  const date = new Date(create_at);

  const nav = useNavigate();

  async function onDeleteVideo() {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    }
    try {
      const res = await fetch(`http://localhost:3300/videos/${id}`, options);
      const data = await res.json();
      console.log(data)
      toast.success(data.message+ ` video: ${name}`);
      setState(state + 1)
    } catch (error) {
      console.log("ups, error: ", error)
    }
  } 


  function onPlayer () {
    nav(`/view/${id}`);
  }
  

  return (
    <li className="item">
      <h3>{name}</h3>
      <div className='player-wrapper'>
        <ReactPlayer 
          className="react-player"
          url={url}
          width='100%'
          height='100%'
          />
        <span className='btn-play' onClick={onPlayer} ></span>
      </div>
      <p>creado en: {date.toLocaleDateString()}</p>
      <span className="btn-delete" onClick={onDeleteVideo}>X</span>
    </li>
  );
}

export { VideoItem };
