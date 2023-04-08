import './App.sass'
import './styles/balls.sass';
import './styles/button.sass';
import Home from "./pages/Home/Home.jsx";
import {useState} from "react";
import CodeCreator from "./pages/CodeCreator/CodeCreator.jsx";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div className="App">
            {currentPage === "home" && <Home setCurrentPage={setCurrentPage}/>}
            {currentPage === "qr" && <CodeCreator />}

            <div className="ball-area">
                <div className="ball ball-top" />
                <div className="ball ball-left" />
                <div className="ball ball-right" />
            </div>
        </div>
    )
}

export default App
