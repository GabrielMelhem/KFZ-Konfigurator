import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./App.css";


import Bestellungen from "./components/bestellungen/Bestellungen";
import Felgen from "./components/felgen/Felgen";
import Lackierungen from "./components/lackierung/Lackierungen";
import Motorleistungen from "./components/motorleistung/Motorleistungen";
import Sonderausstattungen from "./components/sonderausstattung/Sonderausstattungen";
import Zusammenfassung from "./components/zusammenfassung/Zusammenfassung";
import { BestellungProvider } from "./context/BestellungContext";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/motorleistungen" element={<Motorleistungen />} />
        <Route path="/lackierungen" element={<Lackierungen />} />
        <Route path="/felgen" element={<Felgen />} />
        <Route path="/sonderaustattung" element={<Sonderausstattungen />} />
        <Route path="/zusammenfassung" element={<Zusammenfassung />} />
        <Route path="/bestellungen/:slug" element={<Bestellungen />} />
      </Route>
    )
  );
  return (
    <>
      <BestellungProvider>
        <RouterProvider router={router} />;
      </BestellungProvider>
    </>
  );
}



export default App;
