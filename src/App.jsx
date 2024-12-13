import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> {/* The Layout component will be rendered on every route */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
