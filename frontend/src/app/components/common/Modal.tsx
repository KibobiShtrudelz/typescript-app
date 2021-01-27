import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const BsModal = (props: any): JSX.Element => {
  return (
    <StyledModal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      {props.title && (
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
      )}

      <StyledBody>{props.body}</StyledBody>

      {props.footer && (
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      )}
    </StyledModal>
  );
};

export default BsModal;

const StyledModal = styled(Modal)`
  backdrop-filter: blur(20px);

  & > div.modal-dialog {
    & > div.modal-content {
      border-radius: 10px !important;
    }
  }
`;

const StyledBody = styled(Modal.Body)`
  border-radius: 10px !important;
  box-shadow: 0 0 14px 0 #d5d5d5;
  border-radius: 6px;
  border: none;

  & > div.modal-content {
    border-radius: 10px !important;
  }
`;
