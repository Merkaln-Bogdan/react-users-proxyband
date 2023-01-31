import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const ReactModal = (props: ModalProps): React.ReactElement => {
  const { isOpen, children, closeModal } = { ...props };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <button onClick={closeModal}>close</button>
      {children}
    </Modal>
  );
};

export { ReactModal };
