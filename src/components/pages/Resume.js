import React from "react";
import MyResume from "../../pdf/JasonKimResume.pdf";

function Resume() {
  return (
    <div>
      <iframe src={MyResume} width="100%" height="1000px"></iframe>
    </div>
  );
}

export default Resume;
