import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { ModeToggle } from "./components/mode-toggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/miniComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

// Component for handling the /admin redirect
const AdminRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://dashboardfolio-ty57.vercel.app/login';
  }, []);

  return null;
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        {/* <ModeToggle /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminRedirect />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
