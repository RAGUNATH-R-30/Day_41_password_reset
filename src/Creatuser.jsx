import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import CircularProgress from "./CircularProgress";
import { useNavigate } from "react-router-dom";

function Creatuser() {
  //Formikstate for creating new user

  const [progress, setprogress] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};
      if(values.email.length == 0){
        error.email= "Enter the Email."
      }
      if(values.password.length == 0){
        error.password= "Enter the Password."
      }
      return error;
    },
    onSubmit: (values) => {
      createuser(values);
    },
  });

  //This is the place where new user is created
  const createuser = async (values) => {
    try {
      setprogress(true);
      const apiurl = await axios.post(
        "http://localhost:3000/createuser",
        values
      );
      setprogress(false);
      navigate("/forgotpassword");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}>
 <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Sign UP</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {formik.getFieldMeta("email").error &&
              formik.getFieldMeta("email").touched && (
                <span style={{ color: "red" }}>
                  {formik.getFieldMeta("email").error}
                </span>
              )}
            <div className="form-floating" style={{ marginTop: 30 }}>
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {formik.getFieldMeta("password").error &&
              formik.getFieldMeta("password").touched && (
                <span style={{ color: "red" }}>
                  {formik.getFieldMeta("password").error}
                </span>
              )}

            {progress ? (
              <CircularProgress />
            ) : (
              <button
                className="btn btn-primary w-100 py-2"
                type="submit"
                style={{ marginTop: 30 }}
              >
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
     
    </>
  );
}

export default Creatuser;
