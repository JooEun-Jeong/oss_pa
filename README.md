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

##### Windows

1. `node` v18 설치
2. 프로젝트 clone 받고 필요한 라이브러리 설치
   ```bash
   git clone https://github.com/JooEun-Jeong/oss_pa
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. localhost:3000에 접속하여 확인
   1. 각 브라우저마다 유저 생성 가능

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
