# Proctoring-AI



[참고 자료, Git 원본, Image 자료](https://github.com/vardanagarwal/Proctoring-AI)

## Head pose estimation

> 여러 python파일중 `head_pose_estimation.py`만 사용.
>
> pip install -r requirements.txt 대신 아래 version을 install 할것.



1. 가상환경 설정

   1. 각 requirements.txt의 version이 다르기 때문에 conda를 통해 가상환경 설정

   2. ```python
      # 아나콘다 가상환경 생성
      codna create --name <가상환경명> <설치할 패키지>
      
      # 예) 파이썬 3.8.5 버전(최신) 설치 & AI 이름으로 가상환경 설정
      conda create --name AI python
      
      # 설치 된 가상환경 리스트 확인
      conda info --envs
      
      # 가상환경 활성화
      activate AI
      ```

2. requirements.txt

   ```python
   tensorflow==2.1.0
   opencv-python==4.4.0.42
   scikit-learn==0.23.2
   ```

3. 실행

   ``` python
   $ python head_pose_estimation.py
   ```

   