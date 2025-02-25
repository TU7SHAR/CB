"use client";
import React, { useState } from "react";

export default function GetData({ onGenerate }) {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    courseTitle: "",
    date: "",
    orgname: "",
    sperson: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate(formData);
  };

  return (
    <>
      <div className="p-10">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            placeholder="Certificate Builder - CB"
            className="px-4 py-2 border rounded-xl text-2xl "
            disabled
          />
          <input
            type="text"
            name="name"
            placeholder="Recipient Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-xl"
          />
          <input
            type="text"
            name="text"
            placeholder="For Achievement"
            value={formData.text}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl"
          />
          <input
            type="text"
            name="courseTitle"
            placeholder="Course Title"
            value={formData.courseTitle}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-xl"
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-xl"
          />
          <input
            type="text"
            name="orgname"
            placeholder="Issued by Organistion"
            value={formData.orgname}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-xl"
          />
          <input
            type="text"
            name="sperson"
            placeholder="Issued by Person from Organistion specific name"
            value={formData.sperson}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-xl"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Generate Certificate
          </button>
        </form>{" "}
      </div>
    </>
  );
}
