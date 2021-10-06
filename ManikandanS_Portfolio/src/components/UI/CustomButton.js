import { Button } from "react-bootstrap";

const CustomButton = (props) => {

    return(
        <Button variant={props.type} size={props.size} className={props.className}>{props.children}</Button>

    )

}

export default CustomButton;