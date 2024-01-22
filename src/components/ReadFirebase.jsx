import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

const ReadFirebase = () => {
  const [cardAllDoc, setCardAllDoc] = useState([]);

  const fetchData = async () => {
    try {
      const snapshot = await firestore.collection("cardAll").get();
      snapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getcardAll = async () => {
    try {
      const snapshot = await firestore.collection("cardAll").get();
      const newDataList = [];
      snapshot.forEach((doc) => {
        // console.log(doc.data());
        newDataList.push(doc.data());
      });
      // setCont1Res(newDataList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      ReadFirebase
      <div>
        {/* {cardAllDoc.map((item) => {
          <span key={item.id}>{item.id}</span>;
        })} */}
      </div>
    </div>
  );
};

export default ReadFirebase;
