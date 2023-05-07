import {useState} from "react";
import {QRCodeCanvas} from 'qrcode.react';
import Button from "../../components/Button.jsx";
import {faChevronLeft, faDownload, faWarning} from "@fortawesome/free-solid-svg-icons";
import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default ({setCurrentPage}) => {
    const [text, setText] = useState("");
    const [fgColor, setFgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");

    return (
        <>
            <div className="title-area" onClick={() => setCurrentPage("home")}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <h1>Fleß</h1>
            </div>
            <div className="area-qr">
                <div className="left-area">
                    <QRCodeCanvas crossOrigin="anonymous" value={text} id="qrcode" size="256" level="L" fgColor={fgColor} bgColor={bgColor}/>
                    <Button icon={faDownload} text="Download" onClick={() => {
                        // Download canvas & fix error "tainted canvases may not be exported"
                        const link = document.createElement('a');
                        link.download = 'qrcode.png';
                        link.href = document.getElementById('qrcode').toDataURL();
                        link.click();

                        console.log(dataURL)

                    }} />
                </div>
                <div className="right-area">
                    <div className="right-title">
                        <h2>Einstellungen</h2>
                        <hr />
                    </div>
                    <div className="input-items">
                        <div className="input-item">
                            <label>QR-Code URL</label>
                            <input placeholder="https://google.de" type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
                        </div>
                        <div className="input-item">
                            <label>Farbe</label>
                            <input type="color" onChange={(e) => setFgColor(e.target.value)} value={fgColor}/>
                        </div>
                        <div className="input-item">
                            <div className="input-text">
                                <label>Hintergrund</label>
                                <div className={"warn-label " + (bgColor !== "#ffffff" ? "warn-shown" : "")}>
                                    <FontAwesomeIcon icon={faWarning} />
                                    <p className="warn-text">Eingeschränkte Kompatibilität</p>
                                </div>
                            </div>
                            <input type="color" onChange={(e) => setBgColor(e.target.value)} value={bgColor} />
                        </div>
                        <div className="input-item">
                            <label>Logo</label>
                            <input type="button" id="logo" value="Datei auswählen..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}