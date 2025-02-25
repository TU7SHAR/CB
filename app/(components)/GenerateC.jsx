import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export default async function GenerateC(data) {
  const node = document.getElementById("certificate");
  if (node) {
    const imgData = await toPng(node);
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [node.offsetWidth, node.offsetHeight],
    });
    pdf.addImage(imgData, "PNG", 0, 0, node.offsetWidth, node.offsetHeight);
    pdf.save("certificate.pdf");
  }
}
