import axios from "axios";

const URL_BASE_VIDEO = "http://localhost:3300/videos";

const getVideosById = async (id) => {
  const rta = await axios.get(`${URL_BASE_VIDEO}/${id}`);
  const data = {
    name: rta.data.name,
    url: rta.data.url,
    description: rta.data.description,
  };
  return data;
};

const createVideo = async (data) => {
  const options = {
    method: "post",
    url: URL_BASE_VIDEO,
    data: data
  };
  const rta = await axios(options);
  return rta.data;
};

const updateVideo = async (data, id) => {
    const options = {
      method: "patch",
      url: `${URL_BASE_VIDEO}/${id}`,
      data: data
    };
    const rta = await axios(options);
    return rta.data;
  };

export { getVideosById, createVideo, updateVideo };
