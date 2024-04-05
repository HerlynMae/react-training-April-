import ModalSideWrapper from "@/components/partials/modal/ModalSideWrapper";
import React from "react";

const ModalAddParent = ({ setIsAdd, dataEdit }) => {
  const handleClose = () => {
    setIsAdd(false);
  };
  return (
    <ModalSideWrapper>
      <main className="max-w-[400px] w-full bg-white p-4 h-full">
        <div className="flex justify-between mb-5">
          <h2>Add Parent</h2>
          <button onClick={handleClose}>Close</button>
        </div>
        <form action="" className="flex flex-col h-full">
          <div className="grow ">
            <div className="input-wrapper ">
              <label htmlFor="">Name</label>

              <input
                type="text"
                value={dataEdit !== null ? dataEdit.name : " "}
              />
              <small>Error</small>
            </div>
            <div className="input-wrapper ">
              <label htmlFor="">Address</label>

              <input
                type="text"
                value={dataEdit !== null ? dataEdit.address : " "}
              />
              <small>Error</small>
            </div>
            <div className="input-wrapper ">
              <label htmlFor="">Email</label>

              <input
                type="text"
                value={dataEdit !== null ? dataEdit.email : " "}
              />
              <small>Error</small>
            </div>
          </div>
          <div className="form-action flex gap-2 mb-7">
            <button
              className="p-2 bg-red-600 text-white min-w-[120px]"
              type="submit"
            >
              Save
            </button>
            <button
              className="p-2 bg-gray-200 text-gray-900 min-w-[120px]"
              type="reset"
              onClick={handleClose}
            >
              Discard
            </button>
          </div>
        </form>
      </main>
    </ModalSideWrapper>
  );
};

export default ModalAddParent;
