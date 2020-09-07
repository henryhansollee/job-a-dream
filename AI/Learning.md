## 🔎 INFO

### STT (Speech To Text)

> 사람이 말하는 음성언어를 컴퓨터에서 해석하여 텍스트로 변환해 주는 처리 방법.

- Python에서 STT 기술을 사용하기 위해 `SpeechRecognition` 모듈을 사용하였다.

  ```python
  pip install SpeechRecognition
  import speech_recognition
  # print(speech_recognition.__version__) --> 3.8.1 (2020-09-08 기준 최신버전)
  ```

-  `speech_recognition`의 객체를 생성한다.

  ```python
  instance = speech_recognition.Recognizer()  # 객체 생성
  ```

- 이후, API를 활용하여 메서드를 선언한다.

  - 총 7가지의 API를 제공받을 수 있다.
    - recognition_bing():  [Microsoft Bing Speech](https://azure.microsoft.com/en-us/services/cognitive-services/speech/)
    - `recognize_google()`: [Google Web Speech API](https://w3c.github.io/speech-api/speechapi.html)
    - `recognize_google_cloud()`: [Google Cloud Speech](https://cloud.google.com/speech/)
    - `recognize_houndify()`: [Houndify](https://www.houndify.com/)
    - `recognize_ibm()`: [IBM Speech to Text](https://www.ibm.com/watson/services/speech-to-text/)
    - `recognize_sphinx()`: [CMU Sphinx](https://cmusphinx.github.io/)
    - `recognize_wit()`: [Wit.ai](https://wit.ai/)

  ```python
  instance.recognize_google(audio)  # google API를 사용하였다.
  # google API는 기본적으로 API key를 제공함으로서 편리하다. (확인결과 class내에서 디폴드 값으로 정해주었음)
  # 하지만 많은 양의 데이터를 처리할 땐, google_cloud를 추천한다고 한다.
  ```

  

- STT 기술을 이용하는 방법은 __Audio File__에서 Text를 추출하는 방법, __Microphone__에서 추출하는 방법, 총 2가지가 있다.

  1. Audio File에서 Text 추출하기

     > SpeechRecognition 패키지가 지원하는 오디오 파일 포맷은
     >
     > - WAV (PCM/LPCM 포맷)
     >
     > - AIFF / AIFF-C
     >
     > - FLAC (꼭, native FLAC, OGG-FLAC은 지원 X)

     

     ```python
     audio_file = speech_recognition.AudioFile('./my_audio/file_name.wav')
     # 파일확장자가 .mp4 였는데 .wav로 변경시키면 실행되지 않는다. (포맷문제 일듯?) 
     with audio_file as FILE:
         audio = instance.record(FILE) 
         # record 옵션에서 offset과 duration을 줄 수도 있음
         # 하지만 음성이 잘려서 추출된다면 오류 혹은 오타를 범할 가능성이 클 것 같다.
     value_text = instance.recognize_google(audio)
     # print(value_text) --> 영문 오디오파일로 했을 때 잘 나오는 것 같다.
     value_text = instance.recognize_google(audio, show_all=True)
     # print(value_text) --> 분석해낸 모든 문장을 딕셔너리 형태로 출력한다.(아마, JSON 형태 같음)
     ```

  2. Microphone에서 Text 추출하기

     - Mircophone에 접근하기 위하여 `pyaudio` 모듈을 설치한다.

     ```bash
     sudo apt-get install python-pyaudio python3-pyaudio  # linux
     ```

     ```bash
     pip install pyaudio
     ```

     - microphone의 객체를 생성한다.

     ```python
     mic = sr.Microphone()
     # print(sr.Microphone.list_microphone_names())를 입력하면 현재 내 PC에서 사용가능한 Microphone 목록을 보여준다.
     # 목록 중 원하는 Microphone이 있다면 mic = sr.Microphone(device_index = {인덱스 번호})로 선언한다.
     ```

     ```python
     with mic as MIC:
         audio = r.listen(MIC)
     value_text = r.recognize_google(audio) # 계속해서 음성입력을 줄 수 있지만, timeout 시간이 정해져 있다.
     
     # 만약 한글 버전으로 이용하고 싶다면?
     value_text = r.recognize_google(audio, language='ko-KR')
     ```



더 많은 정보를 알고 싶다면 [여기](https://realpython.com/python-speech-recognition/)를 참고하자.

