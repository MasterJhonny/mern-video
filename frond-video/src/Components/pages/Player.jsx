import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import ReactPlayer from "react-player";

function Player({videos}) {

    const { id } = useParams();
    const nav = useNavigate();

    const video = videos.find(v => v.id === parseInt(id));

    function endVideo() {
        console.log("End!!!!!!")
        nav("/videos")
        
    }

    return (
        <div className="box-player">
            <div className='player-wrapper'>
                <ReactPlayer
                    className="react-player"
                    url={video.url}
                    width='100%'
                    height='100%'
                    style={{maxHeight: '75vh'}}
                    onEnded={endVideo}
                />
            </div>
            <p></p>
        </div>
    );
}

export {Player};