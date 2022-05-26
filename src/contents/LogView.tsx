import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LogView(): JSX.Element {
  const [log, setLog] = useState("");
  useEffect(() => {
    const url = `${process.env.REACT_APP_URL}/logview`;
    axios.get(url).then((res) => setLog(res.data));
  }, []);

  return (
    <>
      <div
        style={{
          height: "700px",
          backgroundColor: "white",
          padding: "20px",
          overflowX: "hidden",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bolder" }}>
          DNS SYSTEM LOG
        </div>
        <div style={{ fontSize: "20px" }}>{log}</div>
      </div>
    </>
  );
}
