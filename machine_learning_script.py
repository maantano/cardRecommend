
# import sys
# import pandas as pd
# import json
# from datetime import datetime

# # JSON 형식의 데이터를 직접 받아옴
# json_data = sys.argv[1]
# data = pd.DataFrame(json.loads(json_data))

# # 데이터 분석 및 처리
# # 카드 타입 분석
# card_type_counts = data["이용구분"].value_counts()
# most_used_card_type = card_type_counts.idxmax()

# # 대중교통 카테고리 제외
# data_without_transit = data[data["카테고리"] != "대중교통"]
# # 가맹점 위치 분석
# # most_common_location = data_without_transit["가맹점 위치"].value_counts().idxmax()
# # '가맹점 위치'에서 '구'가 처음 나오는 위치 찾기
# first_occur_index = data_without_transit["가맹점 위치"].str.find("구").idxmax()
# # 해당 위치까지 데이터 추출
# data_for_location = data_without_transit.iloc[:first_occur_index + 1]
# # '가맹점 위치'에서 '구'가 처음 나오는 부분 추출
# most_common_location = data_for_location["가맹점 위치"].str.extract(r"(.*구)")[0].value_counts().idxmax()


# # 이용구분 분석
# check_usage_counts = data["이용구분"].str.contains("체크").sum()
# credit_usage_counts = data["이용구분"].str.contains("신용").sum()

# most_used_card_type = "체크" if check_usage_counts > credit_usage_counts else "신용"

# # 카테고리 분석
# data["이용금액"] = data["이용금액"].str.replace(",", "").astype(int)  # 문자열에서 , 제거하고 숫자로 변환
# category_amounts = data.groupby("카테고리")["이용금액"].sum()
# most_common_category = category_amounts.idxmax()

# # 이용일시 분석
# # data["이용일시"] = pd.to_datetime(data["이용일시"])
# # middle_date = data["이용일시"].quantile(0.5)
# # usage_before_middle = len(data[data["이용일시"] < middle_date])
# # usage_after_middle = len(data[data["이용일시"] >= middle_date])
# # more_common_time = "월초" if usage_before_middle > usage_after_middle else "월말"
# data["이용일시"] = pd.to_datetime(data["이용일시"])
# first_quantile = data["이용일시"].quantile(1/3)  # 1/3 지점
# second_quantile = data["이용일시"].quantile(2/3)  # 2/3 지점

# usage_before_middle = len(data[data["이용일시"] < first_quantile])
# usage_after_middle = len(data[(data["이용일시"] >= first_quantile) & (data["이용일시"] < second_quantile)])
# usage_end_of_month = len(data[data["이용일시"] >= second_quantile])

# if usage_before_middle > usage_after_middle and usage_before_middle > usage_end_of_month:
#     more_common_time = "월초"
# elif usage_after_middle > usage_before_middle and usage_after_middle > usage_end_of_month:
#     more_common_time = "월 중간"
# else:
#     more_common_time = "월말"

# # 예상 결과 생성
# prediction_result = {
#     "mostUsedCardType": most_used_card_type,
#     "mostUsedLocation": most_common_location,
#     "mostUsedCategory": most_common_category,

#     "usagePattern": more_common_time + "에 더 많이 사용"
# }
# result_json = json.dumps(prediction_result)
# print(result_json)







# import sys
# import pandas as pd
# import json
# from sklearn.linear_model import LinearRegression
# from sklearn.model_selection import train_test_split
# from io import StringIO

# # CSV 형식의 데이터를 직접 받아옴
# csv_data = sys.argv[1]

# # CSV 데이터를 DataFrame으로 읽기
# data = pd.read_csv(StringIO(csv_data), sep=',')

# # 데이터 전처리
# # 필요한 특성 선택
# selected_features = ["카테고리", "이용일시", "이용구분", "이용금액"]

# # 데이터 형식 변환
# data["이용일시"] = pd.to_datetime(data["이용일시"], format="%Y/%m/%d %H:%M", errors='coerce')
# data["이용금액"] = data["이용금액"].str.replace(",", "").astype(float)

# # null 값을 포함한 행 삭제
# data = data.dropna(subset=selected_features)

# # 대중교통 카테고리 제외
# data = data[data["카테고리"] != "대중교통"]

# # 회귀 모델을 위한 특성 선택
# X = data[["카테고리", "이용일시", "이용구분"]]
# y = data["이용금액"]

# # 범주형 변수 인코딩 (One-Hot Encoding)
# X_encoded = pd.get_dummies(X, columns=["카테고리", "이용구분"])

# # 데이터가 충분한 경우에만 분할
# if len(data) > 0:
#     # 학습 데이터와 테스트 데이터로 분할
#     X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

#     # 회귀 모델 생성 및 학습
#     model = LinearRegression()
#     model.fit(X_train, y_train)

#     # 테스트 데이터에 모델 적용 및 예측
#     y_pred = model.predict(X_test)

#     # 예측 결과 리턴
#     prediction_result = {
#         "predicted_categories": list(X_test["카테고리"].values),
#         "predicted_use_date": list(X_test["이용일시"].dt.strftime("%Y-%m-%d %H:%M:%S").values),
#         "predicted_card_type": list(X_test["이용구분"].values),
#         "predicted_amount": list(y_pred)
#     }

#     result_json = json.dumps({"result": prediction_result})
#     print(result_json)
# else:
#     result_json = json.dumps({"error": "데이터가 부족하여 모델 학습이 불가능합니다."})
#     print(result_json)


import sys
import pandas as pd
import json
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from io import StringIO


received_data = json.loads(sys.argv[1])
print('received_data ===>',received_data)
# received_data = [{"이용일시":"2023/08/13 03:05","승인번호":"03419365","이용카드":"본657","가맹점명":"택시_우티택시_KC","이용금액":"15,300","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.09.25","업태코드":"운수 및 창고업","업종":"기타4","카테고리":"대중교통","가맹점 위치":"서울 구로구 디지털로26길 72(구로동)"},{"이용일시":"2023/08/13 02:33","승인번호":"03346476","이용카드":"본657","가맹점명":"택시_우티택시_KC","이용금액":"1,000","이용구분":"체크","매입상태":"승인취소","결제예정일":"","업태코드":"운수 및 창고업","업종":"기타4","카테고리":"대중교통","가맹점 위치":"서울 구로구 디지털로26길 72(구로동)"},{"이용일시":"2023/08/09 08:27","승인번호":"49533172","이용카드":"본657","가맹점명":"LG  U+통신요금","이용금액":"9,930","이용구분":"체크(B)","매입상태":"전표매입","결제예정일":"23.09.25","업태코드":"예술, 스포츠 및 여가관련 서비스업","업종":"통신요금(이동,시내전화)","카테고리":"통신","가맹점 위치":"서울 중구 남대문로5가 827번지 남산트라팰리스"},{"이용일시":"2023/08/01 10:20","승인번호":"44250341","이용카드":"본174","가맹점명":"쿠팡(쿠페이)","이용금액":"4,990","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"정보통신업","업종":"전자상거래(다품목취급)","카테고리":"온라인 쇼핑","가맹점 위치":"서울 송파구 송파대로 570,14층(신천동)"},{"이용일시":"2023/07/31 00:33","승인번호":"27010829","이용카드":"본657","가맹점명":"택시_우티택시_KC","이용금액":"1,000","이용구분":"체크","매입상태":"승인취소","결제예정일":"","업태코드":"운수 및 창고업","업종":"기타4","카테고리":"대중교통","가맹점 위치":"서울 구로구 디지털로26길 72(구로동)"},{"이용일시":"2023/07/22 23:17","승인번호":"20080524","이용카드":"본657","가맹점명":"택시_우티택시_KC","이용금액":"8,500","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"운수 및 창고업","업종":"기타4","카테고리":"대중교통","가맹점 위치":"서울 구로구 디지털로26길 72(구로동)"},{"이용일시":"2023/07/22 23:03","승인번호":"20001361","이용카드":"본657","가맹점명":"택시_우티택시_KC","이용금액":"1,000","이용구분":"체크","매입상태":"승인취소","결제예정일":"","업태코드":"운수 및 창고업","업종":"기타4","카테고리":"대중교통","가맹점 위치":"서울 구로구 디지털로26길 72(구로동)"},{"이용일시":"2023/07/22 11:22","승인번호":"10991471","이용카드":"본657","가맹점명":"매머드 익스프레","이용금액":"1,600","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"커피전문점","카테고리":"베이커리 & 커피","가맹점 위치":"서울 서초구 서초중앙로 24길 15, 1층(서초동)"},{"이용일시":"2023/07/21 10:37","승인번호":"46133307","이용카드":"본657","가맹점명":"매머드 익스프레","이용금액":"1,600","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"커피전문점","카테고리":"베이커리 & 커피","가맹점 위치":"서울 서초구 서초중앙로 24길 15, 1층(서초동)"},{"이용일시":"2023/07/20 10:07","승인번호":"31555235","이용카드":"본657","가맹점명":"씨유삼풍중앙점","이용금액":"1,600","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"편의점","카테고리":"편의점","가맹점 위치":"서울 서초구 서초중앙로28길 10(서초동)"},{"이용일시":"2023/07/20 10:02","승인번호":"31470316","이용카드":"본657","가맹점명":"매머드 익스프레","이용금액":"3,000","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"커피전문점","카테고리":"베이커리 & 커피","가맹점 위치":"서울 서초구 서초중앙로 24길 15, 1층(서초동)"},{"이용일시":"2023/07/19 12:15","승인번호":"19269943","이용카드":"본657","가맹점명":"인터넷상거래","이용금액":"113,400","이용구분":"체크(A)","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"정보통신업","업종":"결제대행(PG)","카테고리":"온라인 쇼핑","가맹점 위치":"서울 강남구 테헤란로 131, 15층(역삼동, 한국지식재산센터)"},{"이용일시":"2023/07/19 12:12","승인번호":"19217982","이용카드":"본657","가맹점명":"예스이십사공연_","이용금액":"357,200","이용구분":"체크(A)","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"정보통신업","업종":"결제대행(PG)","카테고리":"온라인 쇼핑","가맹점 위치":"서울 중구 통알로 92, 14-15층(순화동, 케이지타워)"},{"이용일시":"2023/07/19 00:47","승인번호":"14153056","이용카드":"본657","가맹점명":"한국맥도날드(유)","이용금액":"12,600","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"패스트푸드","카테고리":"음식점","가맹점 위치":"서울 강남구 삼성로92길 29, 지하 1층, 지상1층, 2층(삼성동)"},{"이용일시":"2023/07/18 15:44","승인번호":"08513434","이용카드":"본657","가맹점명":"이마트24 서초네","이용금액":"8,800","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"편의점","카테고리":"편의점","가맹점 위치":"서울시 서초구 서초중앙로20길 37(서초동)"},{"이용일시":"2023/07/18 13:10","승인번호":"06506299","이용카드":"본657","가맹점명":"매머드 익스프레","이용금액":"1,600","이용구분":"체크","매입상태":"전표매입","결제예정일":"23.08.25","업태코드":"숙박 및 음식점업","업종":"커피전문점","카테고리":"베이커리 & 커피","가맹점 위치":"서울 서초구 서초중앙로 24길 15, 1층(서초동)"}]
    # 고정된 키를 가진 빈 리스트 생성
keys = ["이용일시", "승인번호", "이용카드", "가맹점명", "이용금액", "이용구분", "매입상태", "결제예정일", "업태코드", "업종", "카테고리", "가맹점 위치"]
data = {key: [] for key in keys}
# 반복문을 통해 데이터 추출
for item in received_data:
    print('item ====>',item)
    for key in keys:
        print(f"Key: {key}, Value: {item[key]}")
    print("-" * 20)  # 각 항목 구분용
# 데이터 확인
print(data)
    # 데이터를 DataFrame으로 변환
data = pd.DataFrame(data)

# 데이터 형식 변환
data["이용일시"] = pd.to_datetime(data["이용일시"], format="%Y/%m/%d %H:%M", errors='coerce')
data["이용금액"] = data["이용금액"].str.replace(",", "").astype(float)

# null 값을 포함한 행 삭제
data = data.dropna(subset=["이용일시", "승인번호", "이용카드", "가맹점명", "이용금액", "이용구분", "매입상태", "결제예정일", "업태코드", "업종", "카테고리", "가맹점 위치"])

# 대중교통 카테고리 제외
data = data[data["카테고리"] != "대중교통"]

# 회귀 모델을 위한 특성 선택
X = data[["카테고리", "이용일시", "이용구분"]]
y = data["이용금액"]

# 범주형 변수 인코딩 (One-Hot Encoding)
X_encoded = pd.get_dummies(X, columns=["카테고리", "이용구분"])

# 데이터가 충분한 경우에만 분할
if len(data) > 0:
    # 학습 데이터와 테스트 데이터로 분할
    X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

    # 회귀 모델 생성 및 학습
    model = LinearRegression()
    model.fit(X_train, y_train)

    # 테스트 데이터에 모델 적용 및 예측
    y_pred = model.predict(X_test)

    # 예측 결과 리턴
    prediction_result = {
        "predicted_categories": list(X_test["카테고리"].values),
        "predicted_use_date": list(X_test["이용일시"].dt.strftime("%Y-%m-%d %H:%M:%S").values),
        "predicted_card_type": list(X_test["이용구분"].values),
        "predicted_amount": list(y_pred)
    }

    result_json = json.dumps({"result": prediction_result})
    print(result_json)
else:
    result_json = json.dumps({"error": "데이터가 부족하여 모델 학습이 불가능합니다."})
    print(result_json)
