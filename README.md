### 구현 목표

본 프로젝트는 "채팅 웹 앱"을 구현하는 것이 목표입니다.  
브라우저마다 한 유저씩 채팅을 작성할 수 있으며, 처음 들어갈 때 입력한 프롬프트가 유저의 이름이 됩니다.  
여러 유저가 참여할 수 있으며, 채팅마다 입력한 시간과 작성한 유저가 누구인지 뜹니다.

### 구현 기능

- `React TypeScript`, `Express.js`, `mongoDB`를 이용한 Client, Server, DB 구축
- 프롬프트로 로그인 시, 해당 유저로 채팅 내용 작성
- 다른 유저들과 실시간 채팅 기능

### Reference

[1] https://www.youtube.com/watch?v=uE9Ncr6qInQ&t=0s  

[2] https://github.com/legobitna/chatapp-client

### 지원 OS 및 실행 방법

#### 지원 OS

| OS      | 지원여부 |
| ------- | -------- |
| windows | O        |
| Linux   | O        |
| MacOs   | O        |

#### 실행 방법

##### 모든 OS 공통

1. node `v18` 설치  
2. 클론받고 라이브러리 설치
      ```bash
      # 클론 받기
      git clone https://github.com/JooEun-Jeong/oss_pa
      # 프론트 폴더로 접근하여 관련 라이브러리 설치
      cd oss_pa && cd frontend && npm install
      # 백엔드 폴더로 접근하여 관련 라이브러리 설치
      cd ../backend && npm install
      ```  
3. backend/ 아래에 .env 파일 추가하기. (path: backend/.env)  
      .env내용은 아래와 같음. 
      ``` bash
      PORT=5001
      DB=mongodb://localhost:27017/talk
      MONGODB=mongodb+srv://{본인_ID}:{비밀번호}@{cluster이름}.nihveqm.mongodb.net
      ```


4. backend 실행
      ``` bash
      cd backend && npm start
      ```

5. frontend 실행 (터미널 새로 하나 켜서 실행)
      ``` bash
      cd frontend && npm start
      ```
      - 이때, 포트 번호가 3000으로 잘 되는지 확인.  
      - 3000이 아닌 다른 포트로 선택되었을 때, backend/index.js 의 9번째 line에 포트 번호를 다른 포트로 바꿔줘야함.  
      - 포트 번호 바꿨다면, 백엔드 재실행 후, 프론트 새로 고침 필요.  


**발생 가능한 문제와 솔루션**
1. backend 실행시 DB 연결이 안될 때  
      > connected to database 라는 로그가 백엔드 실행시 찍히지 않는다면, 프로그램이 제대로 돌아가지 않습니다.
      < DB 생성하는 방법 >  
      1. MongoDB Atlas 접속 > 회원가입/로그인  
      2. DB 생성 하기 https://www.codeit.kr/tutorials/70/mongodb-atlas 참고.  
         >  a. 왼편 Deployment > Database 메뉴 선택 > create  
         >  b. Free 요금제 선택(만약 한번이라도 free DB 만들었다면 FREE 메뉴 없음)하고 Provider, Region, DB 이름, 작성   
         >  c. user name과 password도 설정  
         >  d. 위 블로그에 나와있는 collection 생성할 필요 없음  
         >  d. 현재 있는 곳의 IP 등록  
      3. 생성한 DB URL 가져오기 https://www.codeit.kr/tutorials/70/mongodb-atlas 하단 부분 참고.   
         >  a. 왼편 Deployment > Database 메뉴 선택  
         >  b. 생성된 cluster의 connect 버튼 클릭 > driver 옵션 클릭  
         >  c. 3번 Add your connection string into your application code에서 url 복사하기  
      4. 복사한 url을 .env 파일의 MONGODB=복사한url 형태로 넣기  
2. 프론트, 백 포트 번호 연결 (만약, 코드 상에 설정해둔 포트로 동작하지 않을 경우)
      > 백: backend/index.js 9번째 줄에서 client가 돌아가는 포트번호 맞추기(default 3000)  
      > 프론트: frontend/src/utils/server.ts 2번째 줄에서 server(backend)가 돌아가는 포트번호 맞추기(default 5001)

### 구조

```bash
.
├── README.md
├── backend
│   ├── Controllers             # How to use data
│   │   ├── chat.controller.js
│   │   └── user.controller.js
│   ├── Dockerfile
│   ├── Models                  # The format of data
│   │   ├── chat.js
│   │   └── user.js
│   ├── app.js                  # DB 연결
│   ├── index.js                # main logic
│   ├── nginx
│   │   └── default.conf
│   ├── package-lock.json
│   ├── package.json
│   └── utils                   # socket 관련 함수들 정의
│       └── io.js
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── README.md
│   ├── nginx
│   │   └── default.conf
│   ├── package-lock.json
│   ├── package.json
│   ├── public                  # assets
│   │   ├── background.png
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── profile.jpeg
│   │   └── robots.txt
│   ├── src
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx             # 메인 로직
│   │   ├── components          # 컴포넌트들
│   │   │   ├── Alert
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── InputField
│   │   │   │   ├── InputField.css
│   │   │   │   └── index.tsx
│   │   │   └── MessageContainer
│   │   │       ├── MessageContainer.css
│   │   │       └── index.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── interfaces          # 인터페이스 정의
│   │   │   └── index.ts
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── reportWebVitals.ts
│   │   ├── setupTests.ts
│   │   └── utils               # 함수들 정의
│   │       ├── index.ts
│   │       └── server.ts
│   ├── tsconfig.json
│   └── tsconfig.paths.json     # 파일 위치
├── package-lock.json
└── package.json

```
### 실행 결과
![realtimeChat](https://github.com/JooEun-Jeong/CGAD3/assets/54920318/d010f472-c276-44a2-b6cd-857357853cc9)


---
### To do
+ 버튼 기능넣기
  + 배경 바꾸기, 이미지 업로드
+ docker-compose로 이미지 빌드되게 하기
+ 채팅방 여러개 들어갈 수 있게 하기
