import React from "react";

const Prac = ({ ...props }) => {
  // props 객체 형태로 스프레드 연산자로 다 받아올때 이벤트가 있다면 props를 넘겨줄떄 이벤트 이름으로 넘벼줘야지 동작한다.
  return (
    <div {...props}>
      <div>{props.id}</div>
    </div>
  );
};

export default Prac;
