import Image from "next/image";
import ribbon from "../../public/ribbon.png";

export default function C1({ data }) {
  return (
    <div
      id="certificate"
      style={{
        width: "800px",
        height: "600px",
        border: "10px solid #28a745",
        padding: "20px",
        position: "relative",
        fontFamily: "sans-serif",
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: "bold",
          color: "#28a745",
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
        Of Excellence in {data.courseTitle}
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
        on date of {data.date}
      </p>
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
        className="absolute bottom-[80px] left-[50%] translate-x-[-50%]"
      />
    </div>
  );
}
