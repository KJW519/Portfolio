import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./Page/MainHome";
import CardPage from "./Page/CardPage";
import MousePage from "./Components/Web/MousePage/MouseCurser"

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<MainHome />}></Route>
      <Route path="/card" element={<CardPage />}></Route>
      <Route path="/MousePage" element={<MousePage />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
