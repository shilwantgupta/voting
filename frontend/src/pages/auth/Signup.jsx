import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <Formik
          initialValues={{ username: "", email: "", password: "", phone: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required.";
            }
            if (!values.email) {
              errors.email = "Email is required.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Password is required.";
            }
            if (!values.phone) {
              errors.phone = "Phone Number is required.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              axios
                .post("http://localhost:8001/api/sign-up", values)
                .then((res) => {
                  if (res.status == 200) {
                    navigate("/");
                  }
                });
              setSubmitting(true);
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
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.email && touched.email && errors.email}
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
              <div className="mt-4">
                <input
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="phone"
                  minLength={10}
                  placeholder="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.phone && touched.phone && errors.phone}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>

              <div className="flex items-center justify-center mt-2">
                <p className="text-sm">
                  Already have an account? 
                  <Link className="text-blue-500 hover:text-blue-700" to="/">
                    Login
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

export default Signup;
