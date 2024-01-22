import React, { useState, useEffect } from "react";

const Check = ({ onCheckedItem, res, allChkStatus }) => {
  const [isDone, setIsDone] = useState(false);
  const handleChange = (e) => {
    onCheckedItem(e.target.checked, e.target.id);
    setIsDone(!isDone);
  };
  useEffect(() => {
    if (isDone) {
      setIsDone(!isDone);
    }
  }, [allChkStatus, setIsDone]);

  return (
    <label>
      <div className="bnfbox">
        <input
          type="checkbox"
          id={res.id}
          onChange={handleChange}
          checked={isDone}
          data-chk={isDone}
        />
        <label htmlFor={res.id}></label>
        <div className={isDone ? `basic ${res.cont} on` : `basic ${res.cont}`}>
          <h5>{res.name}</h5>
          <div className="sel_wrap"></div>
          <div data-v-5c0601dc="" data-v-734f3b6c="" className="detail">
            {res.detailItem.split(";").map((item) => (
              <span
                key={item}
                data-v-5c0601dc=""
                data-v-734f3b6c=""
                className=""
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </label>
  );
};

export default Check;
