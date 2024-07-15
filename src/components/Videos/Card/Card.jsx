import { useContext } from "react";
import { deleteVideo } from "../../../hooks/useVideo";
import "./Card.css"
import { VideosContext } from "../../../context/VideosContext";
import Swal from 'sweetalert2';


const Card = ({ video, categoria, openModal, changeVideo }) => {

  const { renderVideos } = useContext(VideosContext);

  // const handleDelete = async (id) => {
  //   try {
  //     const deleted = await deleteVideo(id);
  //     renderVideos();
  //     console.log(deleted);
  //   } catch (error) {
  //     console.error("Error al eliminar el video:", error);
  //   }
  // };

  const handleDelete = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar video',
      cancelButtonText: 'Cancelar'
    });

    if (isConfirmed) {
      try {
        const deleted = await deleteVideo(id);
        renderVideos();
        console.log(deleted);
        Swal.fire('¡Eliminado!', 'El video ha sido eliminado.', 'success');
      } catch (error) {
        console.error('Error al eliminar el video:', error);
        Swal.fire('Error', 'Hubo un problema al intentar eliminar el video.', 'error');
      }
    }
  };

  const handleEdit = () => {
    changeVideo(video);
    openModal();
  }

  return (
    <div className={`${categoria}`} id="card">
      <div className="imagen">
        <img src={`${video.imagen}`} />
      </div>
      <div className="cardButtons">
        <button className="deleteButton" onClick={() => handleDelete(video.id)}>Eliminar</button>
        <button className="editButton" onClick={handleEdit}>Editar</button>
      </div>
    </div>
  );
};

export default Card;
