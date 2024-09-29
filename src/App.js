// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.background = "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
            document.body.style.color = "white";
            //   showAlert("Light mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.color = "black";
            document.body.style.background = "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
        }
    }

    return (
        <>
            <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
            <div className="container mt-4">
                <TextForm heading="Enter Text to Analyze." mode={mode} />
            </div>
            <About />
        </>
    );
}

export default App;
