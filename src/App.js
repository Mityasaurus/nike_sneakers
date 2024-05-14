import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllSneakers from "./pages/AllSneakers";
import Layout from "./pages/Layout";
import { AppProvider } from "./utils/context";
import SneakersView from "./pages/SneakersView";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="all" element={<AllSneakers />} />
              <Route
                path="men"
                element={<SneakersView type={"men"} name={"Men sneakers"} />}
              />
              <Route
                path="woman"
                element={
                  <SneakersView type={"woman"} name={"Women sneakers"} />
                }
              />
              <Route
                path="workout"
                element={
                  <SneakersView type={"workout"} name={"Workout sneakers"} />
                }
              />
              <Route
                path="run"
                element={
                  <SneakersView type={"run"} name={"Running sneakers"} />
                }
              />
              <Route
                path="football"
                element={
                  <SneakersView type={"football"} name={"Football sneakers"} />
                }
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </AppProvider>
  );
}

export default App;
