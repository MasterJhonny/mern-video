import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { VideoItem } from './VideoItem'
const url = 'http://localhost:3300/videos';


function ListVideo() {

    const [videos, setVideos] = useState([]);
    const [state, setState] = useState(1);

    const getVideos  = async () => {
        const rta = await axios.get(url)
        console.log(rta)
        setVideos(rta.data)
    }

    useEffect(() => {
        getVideos()
    }, [])

    useEffect(() => {
        getVideos()
    }, [state])

    console.log(videos);
    return (
        <div className="videos">    
            <h4>Hola</h4>
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