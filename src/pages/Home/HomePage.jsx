import EditModal from "../../components/modal/EditModal";
import VideosContainer from "../../components/Videos/VideosContainer";
import { useModal } from "../../hooks/useModal";
import "./HomePage.css";

const HomePage = () => {

  const [isOpen, openModal, closeModal, actualVideo, changeVideo] = useModal();

  return (
    <>
      <main id="main">
        <section id="info">
          <div id="text">
            <span id="category">FRONT END</span>
            <h1 id="title">Challenge React</h1>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
          <div id="image">
            <img src="/images/info.jpeg" alt="info" />
          </div>
        </section>
        <section id="videos">

          <div id="front">
            <span className="categoria-videos" id="front-title">FRONT-END</span>
            <VideosContainer changeVideo={changeVideo} openModal={openModal} categoria="front" />
          </div>

          <div id="back">
            <span className="categoria-videos" id="back-title">BACK-END</span>
            <VideosContainer changeVideo={changeVideo} openModal={openModal} categoria="back" />
          </div>

          <div id="innovacion">
            <span className="categoria-videos" id="innovacion-title">INNOVACIÓN Y GESTIÓN</span>
            <VideosContainer changeVideo={changeVideo} openModal={openModal} categoria="innovacion" />
          </div>

        </section>

        <EditModal actualVideo={actualVideo} isOpen={isOpen} closeModal={closeModal} />
      </main>
    </>
  );
};

export default HomePage;
