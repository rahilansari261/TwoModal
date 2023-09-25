const Modal1Content = ({
  modalTitle,
  closeFirstModal,
  openSecondModel,
}: any) => {
  const handleSubmit = () => {
    closeFirstModal();
  };

  return (
    <div className="p-12 text-[#212427] bg-white rounded-lg  ">
      <form>
        <div className="flex items-center justify-between mb-6">
          <div className="font-semibold text-base ">{modalTitle}</div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 relative ">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="abc@gmail.com"
              className="text-xs"
            />
          </div>
        </div>

        <div className="flex items-start justify-end gap-4 pt-12">
          <button onClick={openSecondModel}>Cancel</button>

          <button className=" btn col-span-3 flex !gap-[6px] !rounded !border-none bg-gradient-to-r from-[#4576F6] to-[#0C49E7] px-6 py-3 text-lg  !font-medium !capitalize text-[#fff] hover:bg-[#380Eff]">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal1Content;
