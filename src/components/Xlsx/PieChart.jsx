import React from "react";
import { ResponsivePie } from "@nivo/pie";
import "./PieChart.css";

const PieChart = ({ targetRows }) => {
  const handle = {
    padClick: (data) => {
      console.log(data);
    },

    legendClick: (data) => {
      console.log(data);
    },
  };

  const calculateEarningsByCode = () => {
    const earningsByCode = {};
    targetRows.forEach((item) => {
      let code = ""; // 업태 코드
      let earnings = 0; // 초기 이용금액
      if (Array.isArray(item[1])) {
        earnings = item[1].reduce((sum, row) => sum + row["이용금액"], 0);
        code = item[0];
      } else {
        code = item["업태코드"];
        earnings = item["이용금액"];
      }
      if (earningsByCode[code]) {
        earningsByCode[code] += earnings;
      } else {
        earningsByCode[code] = earnings;
      }
    });

    // console.log("earningsByCode ====>", earningsByCode);
    const data = Object.entries(earningsByCode).map(([code, value]) => {
      return {
        id: code,
        value: value,
        formattedValue: value.toLocaleString(),
      };
    });

    const sortedData = data.slice().sort((a, b) => b.value - a.value);
    const rankedData = sortedData.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

    return rankedData;
  };
  const dataList = calculateEarningsByCode();

  return (
    <div>
      <div
        style={{
          width: "350px",
          height: "auto",
          margin: "0 auto",
        }}
      >
        <ResponsivePie
          data={dataList}
          margin={{ top: 70, bottom: 80 }}
          innerRadius={0.5}
          padAngle={1.8}
          cornerRadius={8}
          enableArcLinkLabels={false}
          colors={{ scheme: "blues" }}
          borderWidth={2}
          arcLabel={(e) => e.value.toLocaleString() + "원"}
          tooltip={(item) => {
            console.log(item);
            return (
              <div>
                <div>
                  <b>{item.datum.data.id}</b>
                </div>
                <b>{item.datum.data.rank}번 소비 항목</b>
              </div>
            );
          }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          theme={{
            labels: {
              text: {
                fontSize: 15,
                fill: "#000000",
                color: "red",
              },
            },
            legends: {
              text: {
                fontSize: 12,
                fill: "#000000",
              },
            },
          }}
          onClick={handle.padClick}
          motionConfig="default"
        />
      </div>
    </div>
  );
};

export default PieChart;
