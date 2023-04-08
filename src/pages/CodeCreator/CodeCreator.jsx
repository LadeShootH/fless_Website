import {useState} from "react";
import {QRCodeSVG} from 'qrcode.react';



export default () => {
    const [text, setText] = useState("");

    return (
        <>
            <div className="main-area">
                <QRCodeSVG value={text} />
                <input value={text} onChange={(event) => setText(event.target.value)}/>
            </div>
        </>
    )
}