import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./Page/MainHome";
import CardPage from "./Page/CardPage";
import MousePage from "./Components/Web/MousePage/MouseCurser";
import Three3d from "./Components/Web/Common_Components/three3d";
import Scroll from "./Components/Web/Common_Components/CommonPage1";
import Melt from "./Components/Web/Common_Components/meltPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<MainHome />}></Route>
      <Route path="/card" element={<CardPage />}></Route>
      <Route path="/MousePage" element={<MousePage />}></Route>
      <Route path="three3d" element={<Three3d />}></Route>
      <Route path="scroll" element={<Scroll />}></Route>
      <Route path="melt" element={<Melt />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
