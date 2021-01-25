import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BsModal = (props: any): JSX.Element => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.title && (
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>{props.body}</Modal.Body>

      {props.footer && (
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default BsModal;
