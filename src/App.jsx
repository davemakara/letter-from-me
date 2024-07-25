import { Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import Page1 from "./components/Page1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
      </Routes>
    </>
  );
}

export default App;
