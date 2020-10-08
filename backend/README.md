# Back-end

### 초기 세팅

***

1. ***backend*** 디렉토리에서 가상환경 실행

   ```bash
   $ source venv/Sciprts/activate
   ```

2. 저장된 패키지 설치

   ```bash
   $ pip install -r requirements.txt
   ```

3. migrate 실행

   ```bash
   $ python manage.py migrate
   ```

4. 서버 실행

   ```bash
   $ python manage.py runserver 8080
   ```

:exclamation: Google Cloud Speek 서비스 키 및 ffmpeg 환경 변수 등록



### 폴더 구조

***

```markdown
📂*backend*
┣ 📂*account*
┣ 📂*audios*
┣ 📂*boards*
┃ ┗ 📂AI_code
┣ 📂*fullcourse*
┣ 📂*interview*
┣ 📂*quistions*
┣ 📂*results*
┣ 📂*videos*
┃ ┣ 📂*vision*
┃ ┃ ┣ 📂*Emotion_detection_prev*
┃ ┃ ┣ 📂*GazeTracking*
┃ ┃ ┗ 📂*Proctoring_AI*
┗ README.md
```





### 기능 별 App

***

- **account**
  - 사용자 모델 관리
- **audios**
  - 음성 인식(Speech To Text)을 통한 대본 추출
  - 자주 쓰이는 단어 추출
- **boards**
  - 자기소개서 기반 질문 추출
  - 자기소개서 관리
- **fullcourses**
  - 모든 서비스를 한 번에 이용 가능
- **interview**
  - 프로젝트 메인 디렉토리
- **questions**
  - 면접 전 사용할 질문들을 관리
- **results**
  - 면접 후 결과를 통한 통계 및 분석
- **videos**
  - 영상 인식 서비스
    - 감정 추적
    - 시선 추적
    - 머리 움직임 추적