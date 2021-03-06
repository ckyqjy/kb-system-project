import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StatView(): JSX.Element {
  const [stat, setStat] = useState("");
  useEffect(() => {
    const tick = setTimeout(() => {
      const url = `${process.env.REACT_APP_URL}/statview`;
      axios.get(url).then((res) => setStat(res.data));
    }, 5000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(tick);
  }, [stat]);

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
          DNS SYSTEM STATUS
        </div>
        <div style={{ fontSize: "20px" }}>{stat}</div>
      </div>
    </>
  );
}
