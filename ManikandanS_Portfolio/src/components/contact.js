import { Alert, Form, Button, Card, Container } from "react-bootstrap";
import styles from "./contact.module.css";
import { Redirect } from "react-router-dom";
import { useState, Fragment } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const [enterName, setEnteredName] = useState("");
  const [enterEmail, setEnteredEmail] = useState("");
  const [enterMessage, setEnteredMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enterName.trim().length === 0 ||
      enterEmail.trim().length === 0 ||
      enterMessage.trim().length === 0
    ) {
      setError(true);
      setErrorMessage("Value cannot be empty!!!");
      return;
    }

    if (enterName.trim().length < 6) {
      setError(true);
      setErrorMessage("Name must have >6 characters!!!");
      return;
    }

    emailjs
      .sendForm(
        "service_8zhhc29",
        "template_o9vxn8l",
        event.target,
        "user_mRYm1JytqCkpZ5kvA9TF9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
    setformSubmitted(true);
  };

  return (
    <Fragment>
      {error && (
        <Container className={styles.container}>
          <Alert variant="danger">{errorMessage}</Alert>
        </Container>
      )}
      {formSubmitted ? (
        <Redirect
          to={{
            pathname: "/",
            message: "Your form has reached the admin",
          }}
        ></Redirect>
      ) : (
        <Card className={styles.contactCard}>
          <Card.Body>
            <Card.Title className={styles.title}>Contact</Card.Title>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className={styles.label}>Email address</Form.Label>
                <Form.Control
                  onChange={emailHandler}
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className={styles.label}>Name</Form.Label>
                <Form.Control
                  onChange={nameHandler}
                  required
                  type="text"
                  name="name"
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className={styles.label}>
                  Leave a message
                </Form.Label>
                <Form.Control
                  onChange={messageHandler}
                  required
                  as="textarea"
                  name="message"
                  placeholder="feedback/regarding projects"
                  rows={4}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
};

export default Contact;
