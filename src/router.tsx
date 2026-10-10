import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { KitchenCabinets } from "./pages/KitchenCabinets";
import { CustomWardrobes } from "./pages/CustomWardrobes";
import { Projects } from "./pages/Projects";
import { FAQ } from "./pages/FAQ";
import { Guides } from "./pages/Guides";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services/kitchen-cabinets", element: <KitchenCabinets /> },
      { path: "/services/custom-wardrobes", element: <CustomWardrobes /> },
      { path: "/projects", element: <Projects /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/guides", element: <Guides /> },
      { path: "/contact", element: <Contact /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
