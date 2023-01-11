import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/global/header";
import ErrorAlert from "../components/errorBoundary/ErrorAlert";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import LoadingCycle from "../components/alert/Loader";
import Alert from "../components/alert/Alert";

const Main = lazy(() => import("../pages/index"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const NotFound = lazy(() => import("../components/global/NotFound"));

export const PATH = {
  MAIN: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  NOT_FOUND: "/*",
};

const CustomRouter = () => {
  return (
    <Router>
      <ErrorBoundary fallback={({ error }) => <ErrorAlert error={error} />}>
        <Header />
        <Alert />
        <Suspense fallback={<LoadingCycle />}>
          <Routes>
            <Route path={PATH.MAIN} element={<Main />} />
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.REGISTER} element={<Register />} />
            <Route path={PATH.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default CustomRouter;
