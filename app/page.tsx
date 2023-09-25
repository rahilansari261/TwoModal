
import {
  closeAll,
  closeFirst,
  closeSecond,
  openFirst,
  openSecond,
} from "./redux/reducers/slice";
import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";
import Modal2Content from "./components/Modal2Content";
import Modal1Content from "./components/Modal1Content";

export default function Home() {
  const dispatch = useDispatch();
  const openFirstModal = () => {
    dispatch(openFirst());
  };

  const openSecondModel = () => {
    dispatch(openSecond());
  };

  const closeFirstModal = () => {
    dispatch(closeFirst());
  };

  const closeSecondModal = () => {
    dispatch(closeSecond());
  };

  const closeAllModal = () => {
    dispatch(closeAll());
  };
  return (
    <div>
      <div className="bg-gray-500 border text-base text-red-700" onClick={openFirstModal}>Open First Modal</div>
      <Modal1>
        <Modal1Content
          modalTitle="Add User"
          closeFirstModal={closeFirstModal}
          openSecondModel={openSecondModel}
        />
      </Modal1>

      <Modal2>
        <Modal2Content
          closeSecondModal={closeSecondModal}
          closeAllModal={closeAllModal}
          message="Are you sure you want to discard the changes?"
        />
      </Modal2>
    </div>
  );
}
