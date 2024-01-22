const express = require("express"); // npm i express | yarn add express
const cors = require("cors"); // npm i cors | yarn add cors
const mysql = require("mysql"); // npm i mysql | yarn add mysql
const app = express();
const PORT = 3001; // 포트번호 설정

// MySQL 연결
const db = mysql.createConnection({
  host: "127.0.0.1", // 호스트
  user: "root", // 데이터 베이스 계정
  pasword: "alsruddjs5", // 데이터베이스 패스워드
  database: "card", // 사용 db
});

db.connect();

app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    // credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true }));

// 서버 연결 시 발생
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.post("/text", (req, res) => {
//   const user_id = req.body.inText;
//   console.log(user_id);
//   connection.query("INSERT INTO bank.test01 (user_id) values(?)", [user_id]),
//     function (err, rows, fields) {
//       if (err) {
//         console.log("DB저장 실패")
//       }else{
// 	console.log("DB저장 성공")
//     }
// });

// app.post("/text", (req, res) => {
//   const user_id = req.body.inText;
//   console.log(user_id);
//   db.query("INSERT INTO bank.test01 (user_id) values(?)", [user_id]),
//     function (err, rows, fields) {
//       if (err) {
//         console.log("DB 저장 실패");
//       } else {
//         console.log("DB 저장 성공");
//       }
//     };
// });

app.get("/api/bank", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const sqlQuery = "SELECT * FROM CARD";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
