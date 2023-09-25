const Modal2Content = ({ closeSecondModal, closeAllModal, message }: any) => {
  return (
    <div className="  p-8 text-[#212427] bg-white rounded-lg flex flex-col gap-6  ">
      <div>{message}</div>
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-end gap-4">
          <button onClick={closeSecondModal}>No </button>

          <button onClick={closeAllModal}>Yes </button>
        </div>
      </div>
    </div>
  );
};

export default Modal2Content;
