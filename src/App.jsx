import './App.sass'
import './styles/button.sass';
import Home from "./pages/Home/Home.jsx";
import {useState} from "react";
import CodeCreator from "./pages/CodeCreator/CodeCreator.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div className="App">
            {currentPage === "home" && <Home setCurrentPage={setCurrentPage}/>}
            {currentPage === "qr" && <CodeCreator setCurrentPage={setCurrentPage} />}
            {currentPage === "projects" && <Projects setCurrentPage={setCurrentPage} />}
        </div>
    )
}

export default App
