import { useForm } from "react-hook-form";
import "./EditModal.css";
import { updateVideo } from "../../hooks/useVideo";
import { useContext, useState } from "react";
import { VideosContext } from "../../context/VideosContext";
import { useEffect } from "react"
import Swal from "sweetalert2";

const EditModal = ({ isOpen, closeModal, actualVideo }) => {

    const [id, setId] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const { renderVideos } = useContext(VideosContext)

    const onSubmit = handleSubmit((data) => {
        updateVideo(data, id);
        renderVideos();
        Swal.fire('Listo!', 'El video ha sido actualizado.', 'success')
        closeModal();
    });

    useEffect(() => {
        console.log("a", actualVideo);
        if (actualVideo) {
            setValue("titulo", actualVideo.titulo);
            setValue("categoria", actualVideo.categoria);
            setValue("imagen", actualVideo.imagen);
            setValue("video", actualVideo.video);
            setValue("descripcion", actualVideo.descripcion);
            setId(actualVideo.id)
        }
    }, [actualVideo, setValue]);

    return (
        <section className={`modal ${isOpen && "isOpen"}`}>
            <div className="modalContainer">
                <button className="closeModal" onClick={() => closeModal()}>X</button>

                <h2>EDITAR CARD:</h2>

                <form id="editForm" onSubmit={onSubmit}>
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
                    <div className="grupo completoE">
                        <label>¿De qué se trata este video?</label>
                        <input
                            id="descripcion"
                            name="descripcion"
                            placeholder="Ingrese la descripción del video"
                            rows="4"
                            className="description editDescription"
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
            </div>
        </section>
    )
}

export default EditModal;