import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import Transactions from "./pages/transactions/transactions";
import Cards from "./pages/cards/cards";
import Navbar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/menu";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AzsMap from "./pages/azs-map/azs-map";
import { AppRoute } from "./const";
import Contracts from "./pages/contracts/contracts";
import GlobalStyles from "./styles/global";

const queryClient = new QueryClient();

function App() {
  function Layout() {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={AppRoute.Profile} element={<Profile />} />
          <Route path={AppRoute.Transaction} element={<Transactions />} />
          <Route path={AppRoute.Cards} element={<Cards />} />
          <Route path={AppRoute.Contracts} element={<Contracts />} />
          <Route path={AppRoute.AzsMap} element={<AzsMap />} />
          {/* <Route
        path={AppRoute.PageNotFound}
        element={<NotFoundPage />} 
        /> */}
        </Route>
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
