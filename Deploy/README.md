# 배포 순서
1. 가장 최상위 폴더에서 `docker-compose up --build`
2. 다른 terminal을 연다
3. `$ docker ps`한 다음 back의 container ID를 복사
4. docker exec -t -i {container ID} bash
5. `python manage.py makemigrations`, `python manage.py migrate`실행

## 아직 자동화는 못함.

## https 적용.
  1. issue: nginx에 upstream을 통해 server를 적용해야 함.!! 