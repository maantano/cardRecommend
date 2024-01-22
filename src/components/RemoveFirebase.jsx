import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

const RemoveFirebase = () => {
  const removeDuplicateDataFromFirestore = async () => {
    const collectionRef = firestore.collection("cardAll");
    const duplicateQuerySnapshot = await collectionRef
      .orderBy("id") // 중복 확인할 필드 지정
      .get();

    let previousId = null;

    // 중복된 문서 중 하나만 삭제
    duplicateQuerySnapshot.forEach((doc) => {
      const currentId = doc.data().id;

      if (currentId === previousId) {
        // 중복된 데이터 삭제
        collectionRef.doc(doc.id).delete();
      }

      previousId = currentId;
    });
  };

  // 중복된 데이터 삭제

  useEffect(() => {
    removeDuplicateDataFromFirestore();
  }, []);

  return (
    <div>
      <h2>ReadFirebase</h2>
      RemoveFirebase
    </div>
  );
};

export default RemoveFirebase;
