import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getVideosById, createVideo, updateVideo } from '../../services/serviceVideo';
import { Entrada, Description, Button, ErrorInput } from "../Styled.Components";
import { useAuth0 } from '@auth0/auth0-react';

function CreateVideo({ state, setState }) {
  const useNav = useNavigate();
  const { id } = useParams();
  const { user } = useAuth0();
  
  async function handleRequestVideo(newVideo) {
    const { name, url, description } = newVideo;
    if (name && url && description) {
      try {
        if (Number(id)) {
          const res = await updateVideo(newVideo, id);
          console.log("🚀 ~ file: CreateVideo.jsx:19 ~ handleRequestVideo ~ update", res);
          toast.success("Update video successfully");
          setState(state + 1);
          useNav("/videos");
        } else {
          newVideo.user_id = user.sub;
          const res = await createVideo(newVideo);
          console.log("🚀 ~ file: CreateVideo.jsx:25 ~ handleRequestVideo ~ created", res);
          toast.success("New video Added successfully");
          setState(state + 1);
          useNav("/videos");
        }
      } catch (error) {
        console.log("ups, error!", error);
      }
    }
  }

  const {
    register, 
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    handleRequestVideo(data);
  };
  
  const resetAsyncForm = useCallback(async () => {
    const result = await getVideosById(id);
    reset(result);
  }, [reset]);


  useEffect(() => {
    if(Number(id)) {
      resetAsyncForm();
    }
  }, [resetAsyncForm]);

  return (
    <div className="main">
      <div className="main-form">
        <h2>{Number(id) ? 'Actualizar Video': 'New Video'}</h2>
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
          <Button type="submit">{Number(id) ? 'Actualizar': 'Crear'}</Button>
        </form>
      </div>
    </div>
  );
}

export { CreateVideo };
