const uri = "http://localhost:3000/videos";

export const getAllVideos = async () => {
  try {
    const res = await fetch(`${uri}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.ok) {
      const response = await res.json();
      return response
    } else {
      console.log("Error al obtener los videos", res.statusText);
    }
  } catch (error) {
    console.log("Error al obtener los videos", error);
  }
}

export const getVideos = async (categoria) => {
  try {
    const res = await fetch(`${uri}?categoria=${categoria}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const response = await res.json();
      return response;
    } else {
      console.log("Error al obtener los videos", res.statusText);
    }
  } catch (error) {
    console.log("Error al obtener los videos", error);
  }
};

export const createVideo = async (data) => {
  try {
    const res = await fetch(`${uri}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.log("Error al crear el video", res.statusText);
    }
  } catch (error) {
    console.log("Error al crear el video", error);
  }
};

export const updateVideo = async (data, id) => {
  try {
    const res = await fetch(`${uri}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.log("Error al actualizar el video", res.statusText);
    }
  } catch (error) {
    console.log("Error al actualizar el video", error);
  }
}

export const deleteVideo = async (id) => {
  try {
    const res = await fetch(`${uri}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json"
      }
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.log("Error al eliminar el video", res.statusText);
    }
  } catch (error) {
    console.log("Error al eliminar el video", error);
  }
}