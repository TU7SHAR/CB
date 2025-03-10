"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const Name = searchParams.get("Name");
  const Mail = searchParams.get("Mail");
  const Mobile = searchParams.get("Mobile");
  const _id = searchParams.get("_id");

  const [formData, setFormData] = useState({
    name: Name,
    oldpwd: "",
    npwd: "",
    rnpwd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (e) => {
    try {
      const response = await axios.delete(`/api/deleteAcc?_id=${_id}`);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access npwd and rnpwd from formData
    const { npwd, rnpwd } = formData;

    if (npwd !== rnpwd) {
      setFormData({ ...formData, npwd: "", rnpwd: "" });
      alert(
        "New Password and Re-entered Password do not match. Please try again."
      );
      return;
    }

    try {
      const response = await axios.put("/api/updateUser", { ...formData, _id });
      if (response.status === 200) {
        router.push("/Login");
      }
    } catch (error) {
      if (error.response.status === 400) console.log("Failed");
      else {
        alert("Failed to update user.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="flex max-h-screen items-center justify-center mt-10 p-6">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Account Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={Name}
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={Mail}
              disabled
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder={`+91 ${Mobile}`}
              disabled
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Old Password Field */}
          <div>
            <label
              htmlFor="oldpwd"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="oldpwd"
              id="oldpwd"
              value={formData.oldpwd}
              onChange={handleChange}
              placeholder="Old Password"
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* New Password Field */}
          <div>
            <label
              htmlFor="npwd"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              name="npwd"
              id="npwd"
              value={formData.npwd}
              onChange={handleChange}
              placeholder="Enter New Password"
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Re-enter New Password Field */}
          <div>
            <label
              htmlFor="rnpwd"
              className="block text-sm font-medium text-gray-700"
            >
              Re-Enter New Password
            </label>
            <input
              type="password"
              name="rnpwd"
              id="rnpwd"
              value={formData.rnpwd}
              onChange={handleChange}
              placeholder="Re-Enter Password"
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="_id"
              className="block text-sm font-medium text-gray-700"
            >
              UID
            </label>
            <input
              type="text"
              name="_id"
              id="_id"
              value={_id}
              disabled
              className="mt-1 w-full rounded-lg border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="w-full rounded-lg bg-red-400 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
