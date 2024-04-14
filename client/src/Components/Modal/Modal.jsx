import { useState } from "react";
import './Modal.css'


export default function Modal() {
    const [visible, setVisible] = useState(true)

    const toggleModal = () => {
        setVisible(!visible)

        if(modal) {
            document.body.classList.add('active-modal')
          } else {
            document.body.classList.remove('active-modal')
          }
    }

    return (
        <>
            {visible && (
                <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                <button onClick={toggleModal}>Close</button>
                </div>
            </div>
            )}
        </>
    )
}