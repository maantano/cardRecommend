import React from "react";

const Summary4 = ({ targetRows, preferCardType }) => {
  const getTotalEarnings = (tableData) => {
    const totalEarnings = tableData.reduce(
      (sum, row) => sum + row["이용금액"],
      0
    );
    return totalEarnings; // 문자열이 아닌 숫자 값을 반환
  };

  let maxRow = null;
  let maxEarnings = -Infinity;

  targetRows.forEach(([row, data]) => {
    const earnings = getTotalEarnings(data);
    if (earnings > maxEarnings) {
      maxEarnings = earnings;
      maxRow = row;
    }
  });
  return (
    <div
      style={{
        backgroundColor: "#e4e4e4",
        width: "100%",
        height: "100%",
      }}
    >
      <div>{preferCardType}</div>
      <div>{maxRow}</div>
      <div>{maxEarnings.toLocaleString() + "원"}</div>
      <hr />
      여기에서 캐릭터를 보여주던, 너는 이런이런 스타일이다 요약본을 만들어 줄
      필요가 있음 약간 키치한걸로 캐릭터, 엠비티아이, 일단, 카드 타입으로 너는 -
      체크카드를 더 많이 쓰니깐 000 스타일인거같다. - 가맹점 위치가 나오니깐
      위치 기반으로 너는 어디어디에서 주로 활동하는 무슨 형 인것같다
      <br />
      1. ex. 너는 호탕한 용산구 맛잘알 인것같다.(호탕한 용산구 맛잘알 인것같다.
      음식점에서 가장 많이 사용하고, 바로바로 결제하는 체크카드를 신용카드보다
      더 많이 사용하고, 용산구에서 가장 많이 사용했기때문에 그런걸로 보아 호탕한
      용산구 맛잘알 인것같다)
      <br />
      2. 너는 결제 일 기준으로 초반에 더 사용하는걸로 보아 000형인것 같다.
      <br /> 그러면 가장 많이 사용한 카테고리, 가장 자주 이용한 가맹점 위치(구
      기준), 카드 타입, 월말,월초 결국엔 모든 데이터를 가져와서 이 컴포넌트에서
      처리를 해야하네,
      <br /> 그렇다면, 생각 할 수 있는건,
      <ul>
        <li>1. 카테고리</li>
        <li>2. 가맹점 위치</li>
        <li>3. 카드 타입</li>
        <li>4. 월초, 월말</li>
      </ul>
      <br /> 이것도 뭔가 디비에서 처리를 해야할거같은데,,, 1,2,3,4를 파라미터로
      넘겨서 어떤 규칙으로 디비에서 캐릭터 이미지랑 저거에 맞는 타이틀이나
      문구를 뽑와야할거같음
      <div>
        웹에서 숏폼의 형태가 맞는지 모르겠으나, 토스 모바일 형태 이미지 가져와서
        거기 위에다가 슬라이드 형식으로 만들어서 아니면 뭔가 컴포넌트 화를
        시키던가 해서 마우스 클릭하고 드래그 했을때 이벤트를 감지하고 다음
        컴포넌트로 넘겨주는 화면이 있기만 해도 낫배드 일듯?? 요건 후순위
      </div>
    </div>
  );
};

export default Summary4;
