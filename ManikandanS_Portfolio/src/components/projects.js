import { Fragment, useState } from "react";
import styles from "./projects.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import usePage from "../hooks/usepages";
import OverlayModal from "../components/UI/overlayModal";
import LinearProgress from "@material-ui/core/LinearProgress";

const Projects = () => {
  const { projects, isLoading } = usePage("projects");
  console.log(projects);

  //using the state for showing modal
  const [showModal, setShowModal] = useState(false);
  const [findProject, setFindProject] = useState({});

  const showHandler = (project) => {
    setFindProject(project);
    setShowModal(true);
  };

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>My Projects</h1>
      </header>

      {isLoading && (
        <div>
          <h4  className={styles.loading}>Loading...</h4>
          <LinearProgress className={styles.loader} style={{ width: "50%" }} />
        </div>
      )}
      {!isLoading && (
        <Container>
          <Row>
            {projects.map((project) => {
              return (
                <Col key={project.id} sm={12} md={6}>
                  <Card className={styles.procard}>
                    <Card.Img
                      variant="top"
                      src={project.image}
                      className={styles.image}
                    />
                    <Card.Body className={styles.btn}>
                      <Button
                        onClick={() => showHandler(project)}
                        variant="success"
                      >
                        {project.name}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      <OverlayModal
        project={findProject}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Fragment>
  );
};

export default Projects;
