import React, { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import "./Xlsx2.css"; // 스타일을 위한 CSS 파일
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import Summary from "./Summary";
import Summary2 from "./Summary2";

const XlsxAuto = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [tablesByCode, setTablesByCode] = useState({});
  const [showChart, setShowChart] = useState(false);
  const handleDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array", bookVBA: true });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        jsonData.forEach((row) => {
          const code = row["업태코드"];
          if (!tablesByCode[code]) {
            tablesByCode[code] = [];
          }
          tablesByCode[code].push(row);
        });

        setUploadedFile({ file, jsonData });
        setTablesByCode(tablesByCode);
      };
      reader.readAsArrayBuffer(file);
      setShowChart(true);
    }
  }, []);

  const getTotalEarnings = (tableData) => {
    const totalEarnings = tableData.reduce(
      (sum, row) => sum + row["이용금액"],
      0
    );
    return totalEarnings.toLocaleString();
  };

  return (
    <div style={{ marginTop: 100 }}>
      <h2>Excel2 파일 업로드</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={(e) => handleDrop(e.target.files)}
        />
        <div>
          <h3>업로드된 파일:</h3>
          <p>{uploadedFile?.file.name}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          paddingTop: 100,
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#f9fafb",
          gap: "60px",
          paddingBottom: 100,
        }}
      >
        <div style={{ display: "flex" }}>
          <Summary />
        </div>
        <div className={`pieChartBox2 ${showChart ? "visible" : "visible"}`}>
          {/* <div className={`pieChartBox2 ${showChart ? "visible" : ""}`}> */}
          {uploadedFile && (
            <div className={`chartContainer ${showChart ? "fade-in" : ""}`}>
              <PieChart targetRows={Object.entries(tablesByCode)} />
            </div>
          )}
        </div>
      </div>
      <Summary2 />

      {Object.entries(tablesByCode).map(([code, tableData]) => {
        return (
          <div key={code} className="table-container">
            <h3>업태 코드: {code}</h3>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>이용일시</th>
                  <th>가맹점명</th>
                  <th>이용금액</th>
                  <th>업태코드</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => {
                  const excelDate = row["이용일시"];
                  const excelDateTimeStamp = (excelDate - 25569) * 86400 * 1000; // 엑셀 날짜를 타임스탬프로 변환
                  const usageDate = new Date(excelDateTimeStamp); // 타임스탬프를 이용하여 Date 객체 생성
                  const year = usageDate.getFullYear();
                  const month = String(usageDate.getMonth() + 1).padStart(
                    2,
                    "0"
                  );
                  const day = String(usageDate.getDate()).padStart(2, "0");
                  const hours = String(usageDate.getHours()).padStart(2, "0");
                  const minutes = String(usageDate.getMinutes()).padStart(
                    2,
                    "0"
                  );
                  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
                  return (
                    <tr key={index}>
                      <td>{formattedDate}</td>
                      <td>{row["가맹점명"]}</td>
                      <td>{row["이용금액"]}원</td>
                      <td>{row["업태코드"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>이용금액 총합: {getTotalEarnings(tableData)}원</p>
          </div>
        );
      })}
      <BarChart />
    </div>
  );
};

export default XlsxAuto;
