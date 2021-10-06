import styles from "./skills.module.css";
import { ProgressBar } from "react-bootstrap";
import { Fragment } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import usePage from "../hooks/usepages";
import LinearProgress from "@material-ui/core/LinearProgress";

const Skills = () => {
  const { skills, isLoading } = usePage("skills");

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Technical Skills</h1>
      </header>

      {isLoading && (
        <div>
          <h4 className={styles.loading}>Loading...</h4>
          <LinearProgress className={styles.loader} style={{ width: "50%" }} />
        </div>
      )}

      {!isLoading && (
        <div className={styles.probars}>
          <Container>
            <Row>
              {skills.map((skill) => {
                return (
                  <Col sm={12} md={6} key={skill.id}>
                    <Card className={styles.skillcard}>
                      <Card.Body>
                        <Card.Title>{skill.name}</Card.Title>
                        <ProgressBar
                          className={styles.singleprobar}
                          now={skill.percent}
                          variant="success"
                          striped
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}
    </Fragment>
  );
};

export default Skills;
