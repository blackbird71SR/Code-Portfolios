import styles from "./home.module.css";
import HomeButtons from "./homebuttons";
import { useLocation } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { Fragment } from "react";
import Footer from "./footer";
import Particlesbg from "particles-bg"


const Home = () => {
  const location = useLocation();
  const message = location.message;

  return (
    <Fragment>
      {message && (
        <Container>
          <Alert className={styles.alert} variant="success">
            {message}
          </Alert>
        </Container>
      )}
      <div className={styles.align}>
       
        <h1 className={styles.homecontent}>
          Hi I am Manikandan S.
          <br />I am a passionate software developer.
        </h1>

        <HomeButtons />
       
      </div>
      <Footer/>
      <Particlesbg color="#ffffff" type="cobweb" num={100} bg={true}/>

     
      
    </Fragment>
  );
};

export default Home;
