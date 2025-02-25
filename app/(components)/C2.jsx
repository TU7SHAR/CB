import React from "react";
import Image from "next/image";
import ribbon from "../../public/ribbon.png";

export default function C2({ data }) {
  return (
    <div
      id="certificate"
      style={{
        width: "800px",
        height: "600px",
        padding: "20px",
        position: "relative",
        fontFamily: "serif",
        background: "linear-gradient(to right, #007BFF, #00C6FF)",
        color: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
        className="mt-11"
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          CERTIFICATE
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "normal",
            margin: "0",
          }}
        >
          Of Achievement for {data.courseTitle}
        </h2>
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
          This Certificate is Proudly Presented To
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontStyle: "italic",
            margin: "0",
          }}
        >
          {data.name}
        </h2>
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
          {data.text}
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3 style={{ display: "inline-block", marginRight: "100px" }}>
            {data.orgname}
          </h3>
          <h3 style={{ display: "inline-block", marginLeft: "100px" }}>
            {data.sperson}
          </h3>
        </div>
        <Image
          src={ribbon}
          alt="Ribbon"
          width={100}
          height={100}
          className="absolute bottom-[120px] left-[50%] translate-x-[-50%]"
        />
      </div>
    </div>
  );
}
