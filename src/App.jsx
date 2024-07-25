import { Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import Page12 from "./components/Page12";
import Page13 from "./components/Page13";
import Page14 from "./components/Page14";
import Page15 from "./components/Page15";
import Page16 from "./components/Page16";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
        <Route path="/page5" element={<Page5 />}></Route>
        <Route path="/page6" element={<Page6 />}></Route>
        <Route path="/page7" element={<Page7 />}></Route>
        <Route path="/page8" element={<Page8 />}></Route>
        <Route path="/page9" element={<Page9 />}></Route>
        <Route path="/page10" element={<Page10 />}></Route>
        <Route path="/page11" element={<Page11 />}></Route>
        <Route path="/page12" element={<Page12 />}></Route>
        <Route path="/page13" element={<Page13 />}></Route>
        <Route path="/page14" element={<Page14 />}></Route>
        <Route path="/page15" element={<Page15 />}></Route>
        <Route path="/page16" element={<Page16 />}></Route>
      </Routes>
    </>
  );
}

export default App;
