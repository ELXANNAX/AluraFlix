import "./CreateVideoPage.css";
import VideoForm from "../../components/VideoForm/VideoForm";

const CreateVideoPage = () => {
  return (
    <>
      <section id="mainC">
        <div id="header">
          <h1>NUEVO VIDEO</h1>
          <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
        </div>

        <div id="titleC">
          <h1>Crear Tarjeta</h1>
        </div>

        <VideoForm />
      </section>
    </>
  );
};

export default CreateVideoPage;
