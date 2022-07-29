import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function CreateVideo() {


    const useNav = useNavigate();

    async function postVideo(newVideo) {
        const { name, url, description } = newVideo;
        const requestoptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name, url, description
            })
        }
        const response = await fetch('http://localhost:3300/videos', requestoptions);
        const data = await response.json();
        console.log(data);
        toast.success("New video Added successfully");
        useNav('/videos');
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        postVideo(data);
    }

    return (
        <div className="main">
            <div className="main-form">
                <h2>New Video</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" {...register("name", { required: true, maxLength: 70, minLength: 3 })} />
                    <br />
                    <input className="input" type="url" {...register("url", { required: true})} />
                    <br />
                    <textarea className="input input--area" {...register("description")} />
                    <br />
                    <button className="btn" type="submit">Crear</button>
                </form>
            </div>
        </div>
    );
}

export {CreateVideo};


