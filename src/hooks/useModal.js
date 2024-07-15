import { useState } from "react"


export const useModal = (value = false) => {
    const [isOpen, setIsOpen] = useState(value);
    const [actualVideo, setActualVideo] = useState([])

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const changeVideo = (video) => {
        setActualVideo(video)
    };

    return [isOpen, openModal, closeModal, actualVideo, changeVideo];
}