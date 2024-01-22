import React, { useCallback, useState } from "react";

const CheckList = () => {
  const categoryList = [
    { name: "캠핑기어" },
    { name: "취사용품" },
    { name: "침구·수면용품" },
    { name: "꾸미기·소품" },
    { name: "포터블가전" },
    { name: "아이디어상품" },
    { name: "밀키트·간편식" },
    { name: "장작" },
    { name: "주류" },
  ];

  const [checkedList, setCheckedList] = useState([]);

  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
      console.log(checkedList);
    },
    [checkedList]
  );

  return (
    <div className="list">
      {categoryList.map((item) => {
        return (
          <label className="checkboxLabel" key={item.name}>
            <input
              type="checkbox"
              id={item.name}
              onChange={(e) => {
                onCheckedItem(e.target.checked, e.target.id);
              }}
            />
            <label htmlFor={item.name}>
              <span></span>
              {item.name}
            </label>
          </label>
        );
      })}
      <hr />
      <p>{checkedList.join(",")}</p>
    </div>
  );
};

export default CheckList;
