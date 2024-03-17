import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./App.css";

import Bestellungen from "./components/bestellungen/Bestellungen";
import { BestellungProvider } from "./context/BestellungContext";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />} >
        <Route index element={<Home />} />
        <Route path="/bestellungen/:slug" element={<Bestellungen />} />
      </Route>
    )
  );
  return (
    <>
      <BestellungProvider>
        <RouterProvider router={router} />
      </BestellungProvider>
    </>
  );
}



export default App;
