/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./VideosContainer.css"
import Card from "./Card/Card";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../context/VideosContext";

const VideosContainer = ({ categoria, openModal, changeVideo }) => {

  const { videos } = useContext(VideosContext)
  const [filteredVideos, setFilteredVideos] = useState([]);


  useEffect(() => {
    const data = videos.filter(item => item.categoria === categoria)
    setFilteredVideos(data);

  }, [videos]);

  return <div className="video-container">
    {filteredVideos.map((video) => (
      <>
        <Card key={video.id} categoria={categoria} video={video} openModal={openModal} changeVideo={changeVideo} />
      </>
    ))}


  </div>;
};

export default VideosContainer;
