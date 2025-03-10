"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function page() {
  const router = useRouter();
  const [logData, setLogData] = useState({
    mail: "",
    pwd: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogData({ ...logData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/validateUser", {
        mail: logData.mail,
        pwd: logData.pwd,
      });

      if (response.status === 200) {
        const { name: Name, mobile: Mobile, mail: Mail, _id } = response.data;

        router.push(
          `/AccInfo?Name=${encodeURIComponent(
            Name
          )}&Mobile=${encodeURIComponent(Mobile)}&Mail=${encodeURIComponent(
            Mail
          )}&_id=${encodeURIComponent(_id)}`
        );
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) alert("Incorrect Values!");
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="Your Company"
            src="/cb.png"
            height={200}
            width={200}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="mail"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Mail
              </label>
              <div className="mt-2">
                <input
                  id="mail"
                  name="mail"
                  type="email"
                  value={logData.mail}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="pwd"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot pwd?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="pwd"
                  name="pwd"
                  type="password"
                  value={logData.pwd}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              href="/Register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register Now!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
