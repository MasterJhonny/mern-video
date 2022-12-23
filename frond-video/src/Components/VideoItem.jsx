import React from "react";
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { toast } from 'react-toastify';
import axios from "axios";

import { ButtonIcon } from "./Styled.Components";
const API_URL = 'http://localhost:3300/videos';
const urlIconDelete = 'https://img.icons8.com/external-others-inmotus-design/344/external-Delete-round-icons-others-inmotus-design.png'
const urlIconEdit = 'https://img.icons8.com/nolan/344/edit--v1.png';

function VideoItem({ id, name, url, create_at, setState, state}) {

  const date = new Date(create_at);
  const nav = useNavigate();

  async function onDeleteVideo() {
    const valor = confirm('Are you sure you want to delete?');
    console.log(valor)
    if (valor) {
      const options = {
        method: 'DELETE'
      }
      try {
        const res = await axios(`${API_URL}/${id}`, options);
        console.log(res)
        toast.success(`${res.data.message} video: ${name}`);
        setState(state + 1)
      } catch (error) {
        console.log("ups, error: ", error)
      }
    }
  } 

  function onUdadateVideo () {
    console.log("onUdadateVideo!")
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
      <ButtonIcon style={{ backgroundImage: `url(${urlIconDelete})`}} onClick={onDeleteVideo}></ButtonIcon>
      <ButtonIcon style={{ backgroundImage: `url(${urlIconEdit})`, right: '42px' }} onClick={onUdadateVideo}></ButtonIcon>
    </li>
  );
}

export { VideoItem };
