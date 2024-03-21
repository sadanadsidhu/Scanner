import React, { useState } from "react";
import QRCode from "qrcode.react";

export default function Scanner() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text for QR code"
        style={{ marginBottom: "10px" }}
      />
      {text && <QRCode value={text} style={{ width: 256, height: 256 }} />}
    </div>
  );
}
