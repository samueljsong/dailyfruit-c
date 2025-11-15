// Library Imports
import { Routes, Route } from "react-router-dom";

// Style Imports
import "./App.css";

// Component Imports
import { LoginPage }       from "./pages/LoginPage";
import { SignupPage }      from "./pages/SignupPage";
import { HomePage }        from "./pages/HomePage";
import { CreateGroupPage } from "./pages/CreateGroupPage";
import { JoinGroupPage }   from "./pages/JoinGroupPage";

// Context Imports
import { LanguageProvider } from "./context/LanguageContext";

function App() {
    return (
        <>
            <LanguageProvider>
                <Routes>
                    <Route path="/"            element={<HomePage />}       />
                    <Route path="/login"       element={<LoginPage />}      />
                    <Route path="/signup"      element={<SignupPage />}     />
                    <Route path="/createGroup" element={<CreateGroupPage/>} />
                    <Route path="/joinGroup"   element={<JoinGroupPage/>}   />
                </Routes>
            </LanguageProvider>
        </>
    );
}

export default App;
