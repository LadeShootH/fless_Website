import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBehance, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button.jsx";
import {faQrcode, faRectangleList} from "@fortawesome/free-solid-svg-icons";
import "./Home.sass";

export default ({setCurrentPage}) => {
    const socials = [
        {
            name: "Instagram",
            icon: faInstagram,
            link: "https://www.instagram.com/LadeShootH/"
        },
        {
            name: "Twitter",
            icon: faTwitter,
            link: "https://twitter.com/LeynoxFX"
        },
        {
            name: "Behance",
            icon: faBehance,
            link: "https://www.behance.net/leynoxfx"
        },
        {
            name: "LinkedIn",
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/leon-fleß-078839236/"
        }
    ];

    return (
        <>
            <div className="main-area">
                <h1 className="title">Leon Fleß</h1>
                <div className="social-area">
                    {socials.map((social, index) => (
                        <a href={social.link} key={index} className="social-item" target="_blank">
                            <FontAwesomeIcon icon={social.icon} size="2x"/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="footer-area">
                <Button text="Meine Projekte" icon={faRectangleList} onClick={() => {setCurrentPage("projects")}} />
                <Button text="QR-Code Generator" icon={faQrcode} onClick={() => {setCurrentPage("qr")}} color="gray" />
            </div>
        </>
    )
}
