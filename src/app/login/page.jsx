"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./tokenContext";
import { useMedic } from "./medicContext";

const Login = ({ onLogin }) => {
  const { setToken } = useAuth();
  //const { setLoggedMedic } = useMedic();
  //const { setLoggedUser } = useUsuario();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData
      );
      const newToken = response.data.token;
      setToken(newToken);
      console.log("inicio", response.data);
      onLogin(response.data.nombre);
      setLoggedUser(response.data);
      const idUsuario = response.data.id;

      if (response.data.nombre === "Admin" && response.data.tipo === "Medico") {
        navigate("/admin");
      } else if (response.data.tipo === "Medico") {
        // Una vez que tengas el ID del usuario, realiza una solicitud GET para obtener el ID del alumno
        const resp = await axios.get(
          `http://localhost:3000/medicos/${idUsuario}`
        );
        const medicData = resp.data;

        if (medicData) {
          setLoggedMedic(medicData);
        }
        navigate("/medico");
      } else if (response.data.tipo === "Usuario") {
        const resp = await axios.get(
          `http://localhost:3000/medicos/${idUsuario}`
        );
        const pacienteData = resp.data;

        if (pacienteData) {
          console.log(pacienteData);
          // setProfesorLogueado(profesorData);
        }
        navigate("/paciente");
      } else {
        navigate("/medico");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Your username or password is incorrect.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="p-20 mt-16 flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>

          {message && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register now!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

