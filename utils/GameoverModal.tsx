import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Modal: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const modal = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  }, []);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-3xl text-center">Game over!</h3>
        <p className="py-4 text-center">Play again? </p>
        <div className="modal-action justify-center">
          <form method="dialog">
            {/* If there is a button in the form, it will close the modal */}
            <button
              className="btn-lg rounded-2xl bg-red-500 mx-2 text-white"
              onClick={() => {
                navigate("/");
              }}
            >
              End
            </button>
            <button
              className="btn-lg rounded-2xl bg-green-500 text-white"
              onClick={() => navigate("/level")}
            >
              Play again
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
