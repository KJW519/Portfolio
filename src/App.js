import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./Page/MainHome";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<MainHome />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
