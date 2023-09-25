"use client";

import { useSelector } from "react-redux";

type ChildrenProps = {
  children: React.ReactNode;
};
const Modal1: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { firstModalIsOpen, secondModalIsOpen } = useSelector(
    (state: any) => state.modal
  );

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/70 flex justify-center items-center  ${
        firstModalIsOpen ? "" : "hidden"
      } `}
    >
      {children}
    </div>
  );
};

export default Modal1;
