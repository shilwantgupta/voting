import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required.";
            }
            if (!values.password) {
              errors.password = "Password is required.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              axios
                .post("http://localhost:8001/api/login", values)
                .then((res) => {
                  const { data, token } = res.data;
                  if (res.status == 200) {
                    localStorage.setItem("user", JSON.stringify(data));
                    localStorage.setItem("token", token);
                    if (data.role === "admin") {
                      navigate("/admin/dashboard");
                    } else {
                      navigate("/vote");
                    }
                  }
                });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <input
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.username && touched.username && errors.username}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <input
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="******"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.password && touched.password && errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
              </div>
              <div className="flex items-center justify-center mt-2">
                <p className="text-sm">
                  Don't have an account?
                  <Link
                    className="text-blue-500 hover:text-blue-700"
                    to="/sign-up"
                  >
                    Create
                  </Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
