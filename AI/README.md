### Speech to Text

- `Speech_2_Text`: 음성기반 텍스트 추출 (Google API 적용)

- Frond-End에서의 음성파일은 __blob__ 파일이므로 음성분석을 위해서 __.wav__ 형식으로 변환하였다.

  ```python
  # 코덱변환을 위해 bash를 이용한 ffmpeg tool을 사용.
  os.system('ffmpeg -i '+blob_filename+' -vn -acodec pcm_s16le -ar 44100 -ac 2 output.wav') 
  # --> blob_file을 pcm_s16le코덱으로 44100 sample_rate & channel:2로 output.wav로 변환
  ```

> 만약 ffmpeg가 인식되지 않는다면, `/s03p23b107/AI/Speech_2_Text/ffmpeg-4.3.1-2020-10-01-essentials_build/bin` 경로를 환경변수로 지정한다.

- 추출된 텍스트를 `Konlpy`(한국어 자연어 처리 모듈)를 이용하여 '명사'와 '빈도수'를 추출하고 이를, Front-End에서 Word Cloud로 응용할  수 있다.

### Question Generator

- `Question_Generator`:  텍스트 기반의 질문 생성

- 주어진 자소서를 입력받아 `Konlpy`의 `Komoran` 클래스에서 품사 태깅을 실시한다.
- 태깅 후, NNP(고유 명사)를 set으로 관리하여 중복을 제거한다.
- 중복없는 고유명사를 이용하여 질문 String을 생성하고 랜덤으로 3개를 선택하여 질문 list로 response 한다.

#### # Konlpy는 JAVA JDK를 설치하고 환경변수 등록을 해야만 한다!

![12](/uploads/da9d1bb4a208647197785f775c03ccc4/12.png)

1. Emotion-detection
   1. Data기반 model 학습 필요.
   2. 면접할 때 표정을 측정.
2. GazeTracking
   1. 눈동자의 위치를 통해 시선의 방향 측정
3. Proctoring-AI
   1. [head_post_estimation](Proctoring-AI/head_post_estimation.py)
      1. 얼굴의 방향을 측정.
      2. 면접할 때 자세를 측정