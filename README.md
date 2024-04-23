# Youtube Music 불편함 고쳐보기

## 내가 느낀 불편함
유튜브 뮤직을 노트북을 자주 쓰는 저에게는 웹에서 이용할 일이 많습니다. <br/>
제가 웹에서 쓰면서 느낀 불편함은 다음과 같습니다.

1. 브라우저의 가로폭이 작아지면 하단에 있는 Playerbar에서 앨범커버와 셔플 기능이 사라지는 것
2. 굳이 숨기는 볼륨조절기능과 반복재생기능
![10-ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/3bcbea75-3113-4546-b839-18037be2dfde)

<br/>

3. 브라우저의 가로폭이 작아지면 조작하기 힘든 MusicList
![3-ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/59fcbf36-e2fd-45b1-a7f5-45f1463a38c1)



## 프로젝트 실행
    npm start
## 바뀐점
1,2번 문제점
### 기존
![10-ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/07a919a3-1d00-4651-9f1e-d6e4049ce0f8)
### 변경
![11-ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/85fea61d-0634-4316-95eb-9f99a16ee9b6)

<br/>
3번 문제점

### 기존
![3-ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/46d901bf-2b65-4908-afa1-31d2d45e1a43)
### 변경
![12-ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/184593a2-29e4-41cc-81c8-bd77f647fa0d)


<br/>

## 동작
### Main
![ezgif com-video-to-gif-converter](https://github.com/optshj/Youtube_Music/assets/105402944/00fbf6b6-be71-4d10-bd77-8fc2f62ee281)
![ezgif com-video-to-gif-converter (1)](https://github.com/optshj/Youtube_Music/assets/105402944/48a1c253-0728-4104-8132-de458304a199)

### Sidebar
![ezgif com-video-to-gif-converter (7)](https://github.com/optshj/Youtube_Music/assets/105402944/fce233ff-55b0-4a0e-8540-94fa96a91a72)

### PlayListModal
![ezgif com-video-to-gif-converter (2)](https://github.com/optshj/Youtube_Music/assets/105402944/bf807f24-3b0f-4925-b335-ad0feacc5faf)
![ezgif com-video-to-gif-converter (3)](https://github.com/optshj/Youtube_Music/assets/105402944/ac6a28d6-8bac-465b-a0a0-231e51997b78)

### PlayerPage
![ezgif com-video-to-gif-converter (5)](https://github.com/optshj/Youtube_Music/assets/105402944/e3a02452-2f61-4655-b204-d8992ed8e55e)

### Playerbar
![ezgif com-video-to-gif-converter (4)](https://github.com/optshj/Youtube_Music/assets/105402944/322964b8-1b07-4fca-a6a8-fc634127e82a)
![ezgif com-video-to-gif-converter (6)](https://github.com/optshj/Youtube_Music/assets/105402944/82411666-48d4-4f3e-bc7d-8d3a077d0877)

## 1. Commit Convention
* `Feat` : 새로운 기능 추가
* `Fix` : 버그 수정
* `Docs` : 문서 수정
* `Style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
* `Refactor` : 코드 리펙토링
* `Test` : 테스트 코드, 리펙토링 테스트 코드 추가
* `Chore` : 빌드 업무 수정, 패키지 매니저 수정

## 2. 적용 기술 스택
* React
* TypeScript
* Styled-component
