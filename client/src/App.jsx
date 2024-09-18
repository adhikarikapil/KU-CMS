// Rotues
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login/Login";

// Component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
