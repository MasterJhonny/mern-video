import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Entrada, Description, Button, ErrorInput } from "../Styled.Components";

function CreateVideo({ state, setState }) {
  const useNav = useNavigate();

  async function postVideo(newVideo) {
    const { name, url, description } = newVideo;
    if (name && url && description) {
      const options = {
        method: "post",
        url: "http://localhost:3300/videos",
        data: {
          name,
          url,
          description
        },
      };
      
      try {
        const res = await axios(options);
        console.log(res);
        toast.success("New video Added successfully");
        setState(state + 1);
        useNav("/videos");
      } catch (error) {
        console.log("ups, error!", error);
      }
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    postVideo(data);
  };

  return (
    <div className="main">
      <div className="main-form">
        <h2>New Video</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Entrada
            {...register("name", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
            placeholder="Nombre"
          />
          <ErrorInput>
            {errors.name?.type == "minLength" && "name min length is 3! "}
            {errors.name?.type == "maxLength" && "name max length is 20! "}
            {errors.name?.type == "required" && "name is required! "}
          </ErrorInput>
          <Entrada
            type="url"
            {...register("url", { required: true, minLength: 12 })}
            placeholder="http://example.com"
          />
          <ErrorInput>
            {errors.url?.type == "minLength" && "url min length is 12!"}
            {errors.url?.type == "required" && "url is required! "}
          </ErrorInput>
          <Description {...register("description", { required: true } )} placeholder="Descripción" />
          <ErrorInput>
            {errors.url?.type == "required" && "url is required! "}
          </ErrorInput>
          <br />
          <br />
          <Button type="submit">Crear</Button>
        </form>
      </div>
    </div>
  );
}

export { CreateVideo };
