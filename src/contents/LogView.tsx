import React, { useEffect, useState } from "react";
import axios from "axios";

interface LogViewProps {
  logType: string;
}

export default function LogView({ logType }: LogViewProps): JSX.Element {
  const [log, setLog] = useState("");
  interface StringArray {
    [index: string]: string;
  }
  const titleMap: StringArray = { "1": "MAIL", "2": "CRON", "3": "MESSAGE" };
  const typeMap: StringArray = { "1": "maillog", "2": "cron", "3": "messages" };

  useEffect(() => {
    setLog("");
  }, [logType]);

  useEffect(() => {
    const tick = setTimeout(() => {
      const url = `${process.env.REACT_APP_URL}/logview/${typeMap[logType]}`;
      axios.get(url).then((res) => setLog(res.data));
    }, 5000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(tick);
  }, [log, logType]);

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
          DNS {titleMap[logType]} LOG
        </div>
        <div style={{ fontSize: "20px" }}>{log}</div>
      </div>
    </>
  );
}
