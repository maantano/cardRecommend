import React, { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import "./Xlsx.css"; // 스타일을 위한 CSS 파일
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const XlsxDrag = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [targetRows, setTargetRows] = useState([]);
  const [draggedRow, setDraggedRow] = useState(null);

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

        setUploadedFile({ file, jsonData });
      };

      reader.readAsArrayBuffer(file);
    }
  }, []);

  const handleRowClick = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleTargetRowClick = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleDragStart = (event, row) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(row));
    setDraggedRow(row);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnd = () => {
    setDraggedRow(null);
  };

  const handleDropSelectedToTarget = (event) => {
    event.preventDefault();

    if (selectedRows.length > 0) {
      const updatedTargetRows = [...targetRows];
      selectedRows.forEach((row) => {
        if (!updatedTargetRows.includes(row)) {
          updatedTargetRows.push(row);
        }
      });

      const updatedParsedData = uploadedFile.jsonData.filter(
        (row) => !selectedRows.includes(row)
      );

      setTargetRows(updatedTargetRows);
      setUploadedFile({ ...uploadedFile, jsonData: updatedParsedData });
      setSelectedRows([]);
    }
  };

  const handleDropTargetToParsed = (event) => {
    event.preventDefault();

    if (selectedRows.length > 0) {
      const updatedParsedData = [...uploadedFile.jsonData, ...selectedRows];
      const updatedTargetRows = targetRows.filter(
        (row) => !selectedRows.includes(row)
      );

      setTargetRows(updatedTargetRows);
      setUploadedFile({ ...uploadedFile, jsonData: updatedParsedData });
      setSelectedRows([]);
    }
  };
  return (
    <div style={{ marginTop: 100 }}>
      <h2>Excel 파일 업로드</h2>
      <input
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={(e) => handleDrop(e.target.files)}
      />
      {uploadedFile && (
        <div>
          <h3>업로드된 파일:</h3>
          <p>{uploadedFile.file.name}</p>
          <h3>파싱된 데이터:</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>이용일시</th>
                <th>가맹점명</th>
                <th>이용금액</th>
                <th>업태코드</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFile.jsonData.map((row, index) => {
                const excelDate = row["이용일시"];
                const excelDateTimeStamp = (excelDate - 25569) * 86400 * 1000; // 엑셀 날짜를 타임스탬프로 변환
                const usageDate = new Date(excelDateTimeStamp); // 타임스탬프를 이용하여 Date 객체 생성
                const year = usageDate.getFullYear();
                const month = String(usageDate.getMonth() + 1).padStart(2, "0");
                const day = String(usageDate.getDate()).padStart(2, "0");
                const hours = String(usageDate.getHours()).padStart(2, "0");
                const minutes = String(usageDate.getMinutes()).padStart(2, "0");

                const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
                return (
                  <tr
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, row)}
                    onDragEnd={handleDragEnd}
                    onClick={() => handleRowClick(row)}
                    className={selectedRows.includes(row) ? "selected" : ""}
                  >
                    <td>{formattedDate}</td>
                    <td>{row["가맹점명"]}</td>
                    <td>{row["이용금액"].toLocaleString()}원</td>
                    <td>{row["업태코드"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div
        className="drop-target"
        onDragOver={handleDragOver}
        onDrop={handleDropTargetToParsed}
      >
        {targetRows.length > 0 ? (
          <p>선택된 행들을 파싱 테이블로 드래그하세요</p>
        ) : (
          <p>테이블에서 행을 선택하고 드래그하세요</p>
        )}
      </div>
      <h3>타겟 테이블:</h3>
      <table className="target-table">
        <thead>
          <tr>
            <th>이용일시</th>
            <th>가맹점명</th>
            <th>이용금액</th>
            <th>업태코드</th>
          </tr>
        </thead>
        <tbody>
          {targetRows.map((row, index) => {
            const excelDate = row["이용일시"];
            const excelDateTimeStamp = (excelDate - 25569) * 86400 * 1000; // 엑셀 날짜를 타임스탬프로 변환
            const usageDate = new Date(excelDateTimeStamp); // 타임스탬프를 이용하여 Date 객체 생성
            const year = usageDate.getFullYear();
            const month = String(usageDate.getMonth() + 1).padStart(2, "0");
            const day = String(usageDate.getDate()).padStart(2, "0");
            const hours = String(usageDate.getHours()).padStart(2, "0");
            const minutes = String(usageDate.getMinutes()).padStart(2, "0");

            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            return (
              <tr
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, row)}
                onDragEnd={handleDragEnd}
                onClick={() => handleTargetRowClick(row)} // 클릭 이벤트 추가
                className={selectedRows.includes(row) ? "selected" : ""} // 선택된 행에 스타일 적용
              >
                <td>{formattedDate}</td>
                <td>{row["가맹점명"]}</td>
                <td>{row["이용금액"].toLocaleString()}원</td>
                <td>{row["업태코드"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="drop-target"
        onDragOver={handleDragOver}
        onDrop={handleDropSelectedToTarget}
      >
        {selectedRows.length > 0 ? (
          <p>선택된 행들을 타겟 테이블로 드래그하세요</p>
        ) : (
          <p>테이블에서 행을 선택하고 드래그하세요</p>
        )}
      </div>
      <PieChart targetRows={targetRows} />
      <BarChart />
    </div>
  );
};

export default XlsxDrag;
