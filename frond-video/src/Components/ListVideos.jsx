import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { VideoItem } from './VideoItem'
import { Title } from "./Styled.Components";
const url = 'http://localhost:3300/videos';


function ListVideo({ videos, state, setState }) {

    // const [videos, setVideos] = useState([]);
    // const [state, setState] = useState(1);

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
            <ul className="list">
                {
                    videos.length === 0 ? 'Cargandor...' :
                    videos.map(el => (
                        <VideoItem 
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            url={el.url}
                            create_at={el.create_at}
                            setState={setState}
                            state={state}
                        />)
                    )
                }
            </ul>
        </div>
    ); 
}

export {ListVideo};