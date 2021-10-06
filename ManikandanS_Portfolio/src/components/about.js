import { Fragment } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./about.module.css";
import imagesrc from "../assets/oldprofile.jpg";
import CustomButton from "../components/UI/CustomButton";
import GitHubIcon from "@material-ui/icons/GitHub";


const About = () => {
  return (
    <Fragment>
      <Container fluid >
        <Row>
          <Col sm={12}>
            <img src={imagesrc} alt="profile pic" className={classes.profile} />
            
            <CustomButton size="lg" type="success" className={classes.btn}>
              <span className={classes.icon}>
                <GitHubIcon />
              </span> 
              <a rel="noreferrer" className={classes.anchor} target="_blank" href="https://github.com/manisrini/">View Profile</a> 
            </CustomButton>
          </Col>
          <Col sm={12}>
            <Card className={classes.card}>
              <Card.Header as="h1" className={classes.title}>
                ABOUT ME
              </Card.Header>
              <Card.Text className={classes.content}>
                Hi I am Manikandan S.
                <br />I am a passionate programmer who works hard to solve real
                world problems.
              </Card.Text >
              
              <Card.Text className={classes.content}>
                I develop websites.I am interested in the domains like{" "}
                <strong>Web development,App development,Cloud Computing </strong>etc
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
