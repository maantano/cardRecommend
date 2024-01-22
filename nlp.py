from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.cluster import KMeans
import numpy as np

# 단어 데이터
# words = [
#     "사랑", "애정", "정애", "감정", "인간관계",
#     "집", "주택", "아파트", "거주지", "주거",
#     "과학", "기술", "연구", "개발", "혁신"
#     # 추가 단어들...
# ]
words = [
    "소고기", "돼지고기", "우유", "감자", "고구마",
    "쌀", "닭고기", "연근", "당근", "토마토",
    "현미", "불고기", "고등어", "랍스터", "청포도"
    # 추가 단어들...
]

# 단어 정의 데이터 (예시로 간단하게 정의를 넣었습니다)
definitions = [
    "소의 고기.",
    "식용으로 하는 돼지의 고기.",
    "소의 젖. 백색으로, 살균하여 음료로 마시며 아이스크림, 버터, 치즈 따위의 원료로도 쓴다.",
    "가짓과의 여러해살이풀. 높이는 60~100cm이며, 잎은 겹잎이고 어긋난다. 초여름에 흰색 또는 자주색의 통꽃이 줄기 끝에 핀다. 비교적 찬 기후에서 잘 자라고 성장 기간이 짧다. 남아메리카 칠레가 원산지로 온대, 한대에서 널리 재배된다.",
    "메꽃과의 여러해살이풀. 줄기는 덩굴이 되어 땅 위로 뻗으며 꽃은 보통 피지 않으나 때로 연한 붉은빛의 꽃이 나팔 모양으로 피기도 한다. 땅속뿌리는 식용하거나 공업용으로 쓰고 잎과 줄기도 나물로 식용한다. 북아메리카가 원산지로 따뜻한 지방에서 재배된다.",
    "벼에서 껍질을 벗겨 낸 알맹이.",
    "닭의 살코기.",
    "연꽃의 뿌리줄기. 구멍이 많고, 주성분은 녹말이며, 저냐ㆍ죽ㆍ정과(正果) 따위를 만드는 데 쓴다. 얕은 연못이나 깊은 논에서 재배한다.",
    "산형과의 두해살이풀. 높이는 1미터 정도이며, 잎은 뿌리에서 나고 우상 복엽이다. 여름에 흰 꽃이 줄기 끝에 복산형 화서로 피고, 원뿔 모양의 불그레한 뿌리는 식용한다. 아시아, 유럽, 북아프리카 등지에 분포한다.",
    "거짓과의 한해살이풀. 높이는 1~1.5미터이며, 잎은 어긋나고 우상 복엽이다. 여름에 노란 꽃이 총상(總狀) 화서로 잎겨드랑이에 피고, 열매는 장과(漿果)로 붉게 익으며 식용한다. 남아메리카 열대 지방이 원산지로 밭에서 재배한다.",
    "벼의 겉껍질만 벗겨 낸 쌀. 쓿지 않았기 때문에 깨끗하지 않고 누르스름하다.",
    "쇠고기 따위의 살코기를 저며 양념하여 재었다가 불에 구운 음식. 또는 그 고기.",
    "고등엇과의 바닷물고기. 몸은 기름지고 통통하며 등에 녹색을 띤 검은색 물결무늬가 있고 배는 은백색이다. 생후 2년이면 몸의 길이가 40cm 정도의 성어가 된다. 한국, 일본, 대만 등지에 분포한다.",
    " 서양 요리에 사용하는 커다란 새우류를 통틀어 이르는 말.",
    "포도의 한 종류. 열매가 푸르스름하며, 껍질이 얇고 맛이 달다."
    # 추가 정의들...
]

# TF-IDF 벡터화
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(definitions)

# 코사인 유사도 계산
cosine_similarities = cosine_similarity(X, X)

# KMeans 클러스터링
num_clusters = 15  # 예시로 3개의 클러스터를 생성
kmeans = KMeans(n_clusters=num_clusters)
kmeans.fit(cosine_similarities)

# 결과 출력
# for i in range(num_clusters):
#     cluster_words = np.array(words)[kmeans.labels_ == i]
#     print(f"Cluster {i + 1}: {', '.join(cluster_words)}")

for i in range(num_clusters):
    cluster_words = [words[j] for j in range(len(words)) if kmeans.labels_[j] == i]
    print(f"클러스터 {i + 1}: {', '.join(cluster_words)}")
