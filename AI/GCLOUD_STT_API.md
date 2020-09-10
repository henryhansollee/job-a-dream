## 🔎 INFO

![image-20200909231028684](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200909231028684.png)

- Google Cloud STT 를 사용하기 위해선 `google-cloud-speech` 를 설치한다.

  ```python
  pip install --upgrade google-cloud-speech
  ```

- `GOOGLE_APPLICATION_CREDENTIALS` 환경 변수를 서비스 계정 키가 포함된 JSON 파일의 경로로 설정합니다. 이 변수는 현재 셸 세션에만 적용되므로, 새 세션을 열 경우, 변수를 다시 설정합니다.

  ```bash
  export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"  # Linux
  
  $env:GOOGLE_APPLICATION_CREDENTIALS="[PATH]" # window powersheell
  set GOOGLE_APPLICATION_CREDENTIALS=[PATH] #CMD
  ```

  ```bash
  CLOUD SDK --> gloud auth activate-service-account --key-file='{ path of json }'
  ```
  
- 반드시 google cloud platform에서 사용을 해주어야 한다. (아니면 permition error)

