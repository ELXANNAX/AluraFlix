import { createContext, useEffect, useState } from "react";
import { getAllVideos } from "../hooks/useVideo";

export const VideosContext = createContext();

export const VideosContextProvider = (props) => {

    const [videos, setVideos] = useState([]);

    const renderVideos = async () => {
        try {
            const data = await getAllVideos();
            setVideos(data);
        }
        catch (error) {
            console.log("Error al obtener los videos", error);
        }
    };
    useEffect(() => {
        renderVideos();
    }, []);

    return (
        <VideosContext.Provider value={{ videos, renderVideos }}>
            {props.children}
        </VideosContext.Provider>
    )
}
