import Btn from "./UI/CustomButton";
import styles from "./home.module.css";
import { Link} from "react-router-dom";
import { Container} from 'react-bootstrap'




const HomeButtons = () => {
  return (
    <div className={styles.btns}>
      <Container>
        <Link to="/about">
          <Btn className={styles.btn} type="dark">
            About
          </Btn>
        </Link>

        <Link to="/projects">
          <Btn className={styles.btn} type="dark">
            Projects
          </Btn>
        </Link>

        <Link to="/skills">
          <Btn className={styles.btn} type="dark">
            Skills
          </Btn>
        </Link>

        <Link to="/contact">
          <Btn className={styles.btn} type="dark">
            Contact
          </Btn>
        </Link>

      
      </Container>
    </div>
  );
};

export default HomeButtons;
