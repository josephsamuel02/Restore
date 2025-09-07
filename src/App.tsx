import { Routes, Route } from "react-router-dom";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Event from "./pages/Events";
import About from "./pages/About";
const App = () => {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />

        <Route path={PUBLIC_ROUTES.EVENTS} element={<Event />} />
        <Route path={PUBLIC_ROUTES.ABOUT_US} element={<About />} />
        {/*   <Route path={"/faq"} element={<Faq />} />
        <Route path={"/contact_us"} element={<ContactUs />} /> */}
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
