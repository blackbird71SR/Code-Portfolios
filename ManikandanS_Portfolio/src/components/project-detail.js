import { useParams } from "react-router-dom";
import usePage from "../hooks/usepages";
import { Card } from "react-bootstrap";
import { Fragment } from "react";
import styles from "./projectDetail.module.css";


const ProjectDetail = () => {
  const { projects } = usePage("projects");
  const params = useParams();
  const project_id = params.pid;
  const detail_project = projects.filter(
    (project) => project.id === project_id
  );

  return (
    <Fragment>
      {detail_project.map((project) => (
        <Card key={project.id} className={styles.card}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body className={styles.title}>{project.name}</Card.Body>
          <Card.Body className= {styles.desc}>{project.description}</Card.Body>
        </Card> 
      ))}
    </Fragment>
  );
};

export default ProjectDetail;
