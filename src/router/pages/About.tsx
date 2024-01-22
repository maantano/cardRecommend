import React from "react";
import Cont1 from "../../components/About/Cont1";

const About = () => {
  // const queryString = location.search;

  // const appendSortParams = () => {
  //   searchParams.append("sort", "hello-world");
  //   setSearchParams(searchParams);
  // };
  // useEffect(() => {
  //   console.log("appendSortParams start");
  //   appendSortParams();
  //   console.log("appendSortParams end");
  // }, []);

  return (
    <>
      {/* <p>
        쿼리 스트링: <b>{queryString}</b>
      </p>
      <button
        onClick={() => appendSortParams()}
        style={{ backgroundColor: "red", width: 200, height: 200 }}
      >
        add query string
      </button> */}
      <Cont1 />
    </>
  );
};

export default About;
