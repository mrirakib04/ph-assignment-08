import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Home from "../Layout/Home/Home";
import AllApps from "../Layout/Apps/AllApps";
import Details from "../Layout/Data/Details";
import Downloads from "../Layout/Downloads/Downloads";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          {/* Error page */}
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          {/* All routes */}
          <Route index element={<Home></Home>}></Route>
          <Route
            path="/apps"
            element={<Navigate to={"/all-apps"}></Navigate>}
          ></Route>
          <Route
            path="/all"
            element={<Navigate to={"/all-apps"}></Navigate>}
          ></Route>
          <Route path="/all-apps" element={<AllApps></AllApps>}></Route>
          <Route path="/app/:id" element={<Details></Details>}></Route>
          <Route path="/downloads" element={<Downloads></Downloads>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
