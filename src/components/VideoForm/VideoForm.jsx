import { useForm } from "react-hook-form";
import "./VideoForm.css";
import { createVideo } from "../../hooks/useVideo";
import { useContext } from "react";
import { VideosContext } from "../../context/VideosContext";
import Swal from "sweetalert2";

const VideoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { renderVideos } = useContext(VideosContext)

  const onSubmit = handleSubmit((data) => {
    createVideo(data);
    renderVideos();
    Swal.fire('Listo!', 'El video ha sido creado correctamente', 'success')
  });

  return (
    <form className="formulario" onSubmit={onSubmit}>
      <div className="grupo">
        <label>Título del video</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Ingrese el título del video"
          {...register("titulo", {
            required: {
              value: true,
              message: "El título es obligatorio",
            },
          })}
        ></input>
        {errors.titulo && (
          <span className="error">{errors.titulo.message}</span>
        )}
      </div>
      <div className="grupo">
        <label>Categoría</label>
        <select id="categoria" name="categoria" {...register("categoria")}>
          <option value="">Escoja una categoría</option>
          <option value="front">Front End</option>
          <option value="back">Back End</option>
          <option value="innovacion">Innovación y Gestión</option>
        </select>
        {errors.categoria && (
          <span className="error">{errors.categoria.message}</span>
        )}
      </div>
      <div className="grupo">
        <label>Imagen</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          placeholder="Ingrese el link de la imagen"
          {...register("imagen", {
            required: {
              value: true,
              message: "La imagen es obligatoria",
            },
          })}
        ></input>
        {errors.imagen && (
          <span className="error">{errors.imagen.message}</span>
        )}
      </div>
      <div className="grupo">
        <label>Video</label>
        <input
          type="text"
          id="video"
          name="video"
          placeholder="Ingrese el link del video"
          {...register("video", {
            required: {
              value: true,
              message: "El video es obligatorio",
            },
          })}
        ></input>
        {errors.video && <span className="error">{errors.video.message}</span>}
      </div>
      <div className="grupo completo">
        <label>¿De qué se trata este video?</label>
        <input
          id="descripcion"
          name="descripcion"
          placeholder="Ingrese la descripción del video"
          rows="4"
          className="description"
          {...register("descripcion", {
            required: {
              value: true,
              message: "La descripción es obligatoria",
            },
          })}
        ></input>
        {errors.descripcion && (
          <span className="error">{errors.descripcion.message}</span>
        )}
      </div>
      <div className="grupo botones">
        <button className="button" type="submit">
          Guardar
        </button>
        <button className="button" type="reset">
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default VideoForm;
