import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

const UpdateFirebase = () => {
  const [dataList, setDataList] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const fetchData = async () => {
    try {
      const snapshot = await firestore.collection("cardAll").get();
      // const newDataList = [];

      // snapshot.forEach((doc) => {
      //   newDataList.push({ id: doc.id, ...doc.data() });
      // });
      // const newDataList = snapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      //   imgUrl: doc.imgUrl,
      // }));
      const newDataList = snapshot.docs.map((doc) => {
        console.log(doc.id); // 여기에 console.log 추가
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });

      console.log("newDataList ===>", newDataList);
      setDataList(newDataList);
      console.log("dataList ====>", dataList);
    } catch (err) {
      console.log(err);
    }
  };
  const updateCardImg = async (docId, imgUrl) => {
    console.log("docId ===>", docId);
    try {
      // const docRef = firestore.collection("cardAll").get();
      const docRef = firestore.collection("cardAll").doc(docId);
      await docRef.update({
        cardImg: imgUrl,
      });
      // console.log("탐!!!");
      console.log("Document updated successfully!");
    } catch (err) {
      // console.log("안탐???");
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>ReadFirebase</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {dataList.map((data) => {
          // console.log("data ==>", data);
          return (
            <li
              key={data.docId}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>docID: {data.docId}</span>
                <span>ID: {data.id}</span>
              </div>
              <img
                src={data.cardImg}
                alt="Card Image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  marginTop: "10px",
                }}
              />
              <div>Card Image URL: {data.cardImg}</div>
              <input
                type="text"
                placeholder="Enter new cardImg value"
                style={{
                  margin: "10px 0",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                // value={imgUrl} // imgUrl 상태와 바인딩
                // onChange={(e) => setImgUrl(e.target.value)} // 입력값이 변경될 때 imgUrl 업데이트
                value={data.imgUrl}
                onChange={(e) => {
                  const newDataList = [...dataList];
                  const dataIndex = newDataList.findIndex(
                    (item) => item.docId === data.docId
                  );
                  newDataList[dataIndex].imgUrl = e.target.value;
                  setDataList(newDataList);
                }} // 입력값이 변경될 때 imgUrl 업데이트
              />
              {/* <button
              onClick={() => console.log("Update cardImg for ID:", data.id)}
            > */}
              <button onClick={() => updateCardImg(data.docId, data.imgUrl)}>
                Update cardImg
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UpdateFirebase;
