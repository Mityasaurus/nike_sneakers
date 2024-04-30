import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllSneakers from "./pages/AllSneakers";
import Layout from "./pages/Layout";
import MenSneakers from "./pages/MenSneakers";
import WomanSneakers from "./pages/WomanSneakers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="all" element={<AllSneakers />} />
            <Route path="men" element={<MenSneakers />} />
            <Route path="woman" element={<WomanSneakers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
