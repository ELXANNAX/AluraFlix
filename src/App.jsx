import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/Nav/NavBar";
import CreateVideoPage from "./pages/CreateVideo/CreateVideoPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create-video" element={<CreateVideoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
