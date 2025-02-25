import React from "react";

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to CB - Certificate Builder! We are passionate about
        transforming the way achievements are recognized. Our mission is to
        create stunning, professional certificates that reflect the prestige and
        honor of the accomplishments they represent.
      </p>
      <p className="text-lg mb-4">
        Founded in the heart of a bustling tech hub, CB is driven by a team of
        visionary developers and designers who are dedicated to excellence. We
        understand that a certificate is more than just a piece of paper—it's a
        testament to hard work, talent, and success.
      </p>
      <p className="text-lg mb-4">
        Our platform combines cutting-edge technology with user-friendly design
        to make certificate creation easy and efficient. Whether you're
        recognizing academic milestones, professional certifications, or special
        achievements, CB ensures that every certificate we create is a
        masterpiece.
      </p>
      <h2 className="text-3xl font-semibold text-center mt-8 mb-4">
        Our Core Values
      </h2>
      <ul className="list-disc list-inside text-lg">
        <li>
          <strong>Excellence:</strong> We strive for the highest quality in
          everything we do.
        </li>
        <li>
          <strong>Innovation:</strong> We embrace new ideas and technologies to
          continuously improve our platform.
        </li>
        <li>
          <strong>User-Centric Design:</strong> We prioritize our users' needs
          and ensure a seamless experience.
        </li>
        <li>
          <strong>Integrity:</strong> We are committed to transparency and
          ethical practices in all our operations.
        </li>
      </ul>
      <h2 className="text-3xl font-semibold text-center mt-8 mb-4">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-4 bg-white shadow-lg rounded">
          <h3 className="text-2xl font-bold mb-2">Tushar Gautam</h3>
          <p className="text-lg">Founder & CEO</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded">
          <h3 className="text-2xl font-bold mb-2">Copilot AI</h3>
          <p className="text-lg">Chief Technical Officer</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded">
          <h3 className="text-2xl font-bold mb-2">Tailwind and Next.Js</h3>
          <p className="text-lg">Lead Designer and Tech Stack</p>
        </div>
      </div>
    </div>
  );
}
export const metadata = {
  title: "About - Certificate Builder",
  description:
    "Learn more about CB - Certificate Builder and its mission to provide professional certificate creation services.",
};
