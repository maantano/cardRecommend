import React, { useCallback, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./Xlsx2.css"; // 스타일을 위한 CSS 파일
import Papa from "papaparse"; // For parsing CSV files

import Summary3 from "./Summary3";
interface RowData {
  이용일시: number;
  가맹점명: string;
  매입상태: string;
  업종: string;
  카테고리: string;
  이용구분: string;
  이용금액: number;
  업태코드: string;
}
const XlsxAuto3: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [tablesByCode, setTablesByCode] = useState<{
    [code: string]: RowData[];
  }>({});

  const [preferCardType, setPreferCardType] = useState<string>("");

  const handleDrop = useCallback(async (acceptedFiles: FileList | null) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);

      const text = await readFileAsText(file);
      if (file.name.endsWith(".csv")) {
        parseCSV(text);
        setUploadedFile(file);
      } else if (file.name.endsWith(".xlsx")) {
        try {
          const jsonData = await parseXLSX(file);
          const tables = processTableData(jsonData);
          setUploadedFile(file);
          setTablesByCode(tables);
          updatePreferCardType(tables);
        } catch (error) {
          console.error("Error parsing XLSX:", error);
        }
      }
    }
  }, []);

  const parseCSV = (csvText: string): void => {
    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        console.log("Parsed CSV data:", results.data);
        const jsonData = results.data as RowData[];
        const tables = processTableData(jsonData);
        setTablesByCode(tables);
        updatePreferCardType(tables);
      },
      error: (error: any) => {
        console.error("Error parsing CSV:", error);
      },
    });
  };
  async function parseXLSX(file: File): Promise<RowData[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target && e.target.result) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: "array", bookVBA: true });

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData: RowData[] = XLSX.utils.sheet_to_json<RowData>(sheet);
          resolve(jsonData);
        } else {
          reject(new Error("Failed to read file content"));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  function processTableData(data: RowData[]): { [code: string]: RowData[] } {
    const tablesByCode: { [code: string]: RowData[] } = {};

    data.forEach((row) => {
      const code = row["카테고리"];
      if (!tablesByCode[code]) {
        tablesByCode[code] = [];
      }
      tablesByCode[code].push(row);
    });

    return tablesByCode;
  }
  async function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const text = e.target.result as string;
          resolve(text);
        } else {
          reject(new Error("Failed to read file content"));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file, "utf-8");
    });
  }

  function updatePreferCardType(tables: { [code: string]: RowData[] }) {
    let countCheck = 0;
    let countCredit = 0;

    Object.values(tables)
      .flat()
      .forEach((row) => {
        const 이용구분 = row["이용구분"];
        if (typeof 이용구분 === "string") {
          if (이용구분.includes("체크")) {
            countCheck++;
          } else if (이용구분.includes("신용")) {
            countCredit++;
          }
        }
      });

    let preferCardType = "";
    if (countCheck > countCredit) {
      preferCardType = "체크카드";
    } else if (countCheck < countCredit) {
      preferCardType = "신용카드";
    } else {
      console.log("체크와 신용의 갯수가 같음:", countCheck);
      preferCardType = "체크카드 & 신용카드";
    }

    setPreferCardType(preferCardType);
  }

  useEffect(() => {}, [preferCardType]);

  const calculateTotalByCode = (
    data: RowData[]
  ): { [code: string]: number } => {
    const totalByCode: { [code: string]: number } = {};
    data.forEach((item) => {
      if (!totalByCode[item.카테고리]) {
        totalByCode[item.카테고리] = 0;
      }
      const 이용금액 =
        typeof item.이용금액 === "number"
          ? item.이용금액
          : typeof item.이용금액 === "string"
          ? parseInt((item.이용금액 as any).replace(/,/g, ""), 10)
          : 0;
      totalByCode[item.카테고리] += 이용금액;
    });
    return totalByCode;
  };

  const getTopCodes = (data: { [code: string]: number }, n: number) => {
    console.log(Object.entries(data));
    return Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map((item) => [item[0], item[1]]);
  };

  const totalByCode = calculateTotalByCode(Object.values(tablesByCode).flat());
  const top3Codes = getTopCodes(totalByCode, 3);

  return (
    <div style={{ marginTop: 50 }}>
      <Summary3
        top3Codes={top3Codes}
        targetRows={Object.entries(tablesByCode)}
        uploadedFile={uploadedFile}
        handleDrop={handleDrop}
      />
    </div>
  );
};

export default XlsxAuto3;
