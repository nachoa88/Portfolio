import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import ThemeProvider from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import "./App.css";
import "./i18n";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* The Layout component will be rendered on every route */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
