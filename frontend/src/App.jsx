import React, { Suspense, useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoader from "/src/components/PageLoader";
import Public from "/src/layouts/Public";
import UserRoute from "/src/layouts/UserRoute";
import AdminRoute from "/src/layouts/AdminRoute";
const Login = React.lazy(() => import("/src/pages/auth/Login"));
const Signup = React.lazy(() => import("/src/pages/auth/Signup"));
const Voting = React.lazy(() => import("/src/pages/Voting"));
const NotFound = React.lazy(() => import("/src/pages/error/404"));
const Candidates = React.lazy(() =>
  import("/src/pages/admin/candidates/Candidates")
);
const Users = React.lazy(() => import("/src/pages/admin/users/Users"));
const AVoting = React.lazy(() => import("/src/pages/admin/voting/Votings"));
const Dashboard = React.lazy(() => import("/src/pages/admin/Dashboard"));
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/admin/" element={<AdminRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="candidates" element={<Candidates />} />
              <Route path="users" element={<Users />} />
              <Route path="voting" element={<AVoting />} />
            </Route>
            <Route path="/" element={<Public />}>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
            </Route>
            <Route path="/" element={<UserRoute />}>
              <Route path="/vote" element={<Voting />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
