import { useEffect, useState } from "react";
import travle22Rank from "../firebase/travle22Rank.json";

import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";

const Json_To_Firebase = () => {
  // const jsonData = require('./path/to/your/json/file.json');
  // const collectionName = "travle22Rank";

  // // Promise 배열을 생성하여 각 데이터의 추가 여부를 추적
  // const promises = travle22Rank.map((data) => {
  //   // 예를 들어, 'uniqueField'는 중복 여부를 확인할 필드입니다.
  //   const uniqueFieldValue = data[0];
  //   console.log(data);
  //   const docData = {
  //     id: data[0],
  //     benefitRank: data[1],
  //     benefitId: data[2],
  //   };

  //   // 해당 필드를 기준으로 중복 여부 확인
  //   return firestore
  //     .collection(collectionName)
  //     .where("id", "==", uniqueFieldValue)
  //     .get()
  //     .then((querySnapshot) => {
  //       // 중복되는 데이터가 없으면 추가
  //       if (querySnapshot.empty) {
  //         return firestore.collection(collectionName).add(docData);
  //       } else {
  //         console.log(
  //           `Data with uniqueField '${uniqueFieldValue}' already exists. Skipping...`
  //         );
  //         return null; // 중복되는 경우 추가하지 않음
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error checking for duplicate data: ", error);
  //     });
  // });

  // // 모든 데이터 추가 Promise가 완료될 때까지 기다린 후 로그 출력
  // Promise.all(promises)
  //   .then(() => {
  //     console.log("All data added or skipped.");
  //   })
  //   .catch((error) => {
  //     console.error("Error adding or skipping data: ", error);
  //   });

  return (
    <div>
      {/* <Card>
        <CardContent>
          <Typography> */}
      {/* {cardAll.map((item) => {
        console.log(item);
      })} */}
      JSON To Firebase Cloud DB
      {/* </Typography>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Json_To_Firebase;
