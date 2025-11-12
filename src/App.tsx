// Library Imports
import { Routes, Route } from "react-router-dom";

// Style Imports
import "./App.css";

// Component Imports
import { LoginPage }  from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage }   from "./pages/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login"  element={<LoginPage />}  />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/home"   element={<HomePage />}   />
            </Routes>
        </>
    );
}

export default App;
