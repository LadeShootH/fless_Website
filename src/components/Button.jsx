import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../styles/button.sass";

export default ({text, icon, onClick, color}) => {
    return (
        <button className={"btn" + (color ? " color-" + color : "")} onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} size="2x"/>}
            <h1>{text}</h1>
        </button>
    )
}