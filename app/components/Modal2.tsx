"use client";

import { useSelector } from "react-redux";

type ChildrenProps = {
  children: React.ReactNode;
};
const Modal2: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const { _, secondModalIsOpen } = useSelector((state: any) => state.modal);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/70 flex justify-center items-center  ${
        secondModalIsOpen ? "" : "hidden"
      } `}
    >
      {children}
    </div>
  );
};

export default Modal2;
