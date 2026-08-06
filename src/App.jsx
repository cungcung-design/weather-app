import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function AppContent() {
  const { dark } = useTheme();

  return (
    <div className={`app ${dark ? "dark" : ""} min-h-screen p-4 sm:p-6 md:p-10`}>
      <Navbar />

      <main className="app-main">
        <Home />

        <section id="about" className="about">
          <p>
            🌤 Built with React, Framer Motion &amp; the OpenWeather API.
          </p>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
