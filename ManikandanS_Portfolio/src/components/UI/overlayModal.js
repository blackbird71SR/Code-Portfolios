import { Modal, Button, Container, Row, Col, Image } from "react-bootstrap";
import styles from "./overlayModal.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";

const OverlayModal = (props) => {
  return (
    <Modal
      className={styles.modal}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          className={styles.subhead}
          id="contained-modal-title-vcenter"
        >
          {props.project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <Image
                rounded
                className={styles.overlayimage}
                src={props.project.image}
              />
            </Col>
            <Col md={6} lg={6}>
              <div className={styles.description}>
                <label>
                  <h3 className={styles.subhead}>Description</h3>
                </label>
                <p>{props.project.description}</p>
              </div>
            </Col>

            <Col>
              <div className={styles.tech}>
                <h3 className={styles.subhead}>Technology</h3>
                <Container>
                  {" "}
                  <h5 className={styles.subhead}>Frontend : </h5>{" "}
                  {props.project.frontend}{" "}
                  <h5 className={styles.subhead}>Backend : </h5>{" "}
                  {props.project.backend}{" "}
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button>
          <span className={styles.icon}>
            <GitHubIcon />
          </span>
          <a
            rel="noreferrer"
            href={props.project.github}
            target="_blank"
            className={styles.anchor}
          >
            View Project in Github
          </a>
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OverlayModal;
