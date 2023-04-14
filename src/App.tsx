import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/home/Home";

function App() {

  return (
    <>
      <BrowserRouter>
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
