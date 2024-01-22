import React, { useEffect, useState } from "react";

const Check2 = ({ res, onCheckedBank, allChkStatus }) => {
  const [isDone, setIsDone] = useState(false);
  const handleChange = (e) => {
    onCheckedBank(e.target.checked, e.target.id);
    setIsDone(!isDone);
  };
  useEffect(() => {
    if (isDone) {
      setIsDone(!isDone);
    }
  }, [allChkStatus, setIsDone]);

  return (
    <>
      <label htmlFor={res.id}>
        <li data-v-2c2d8c87="" className={isDone ? "checked" : ""}>
          <input
            type="checkbox"
            id={res.id}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {res.name}
        </li>
      </label>
    </>
  );
};

export default Check2;
