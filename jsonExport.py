import mysql.connector
import json

# MySQL 연결 설정


conn = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="alsruddjs5",
    database="card"
)


# 커서 생성
cursor = conn.cursor()

# 쿼리 실행
cursor.execute("SELECT * FROM travle22Rank")

# 결과 가져오기
result = cursor.fetchall()

# JSON 파일로 저장
with open('/Users/mingyeong-eon/card/src/firebase/travle22Rank.json', 'w') as json_file:
    json.dump(result, json_file)

# 연결 닫기
cursor.close()
conn.close()
