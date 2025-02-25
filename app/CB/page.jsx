"use client";
import React, { useState } from "react";
import GetData from "../(components)/GetData";
import C from "../(components)/C";
import C1 from "../(components)/C1";
import C2 from "../(components)/C2";
import C3 from "../(components)/C3";
import GenerateC from "../(components)/GenerateC";

function page() {
  const [data, setData] = useState(null);

  const handleGenerate = (formData) => {
    setData(formData);
    GenerateC(formData);
  };
  return (
    <div>
      <GetData onGenerate={handleGenerate} />
      <div className="flex flex-wrap justify-center gap-8 my-8">
        {data && <C data={data} />}
        {data && <C1 data={data} />}
        {data && <C2 data={data} />}
        {data && <C3 data={data} />}
      </div>
    </div>
  );
}

export default page;
