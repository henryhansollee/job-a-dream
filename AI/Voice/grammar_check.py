""" 초기 한번 hanspell을 설치해준다.
-> 모듈을 찾을 수 없다고 나오면,
py-hanspell 디렉토리에서
python setup.py install
을 실행해준다.
-> 만약 requests 모듈을 찾을 수 없다고 나온다면, pip install requests 를 실행한다.
"""

from hanspell import spell_checker
TEXT = '안녕 하세요. 저는 한국인 입니다. 이문장은 한글로 작성됬습니다.'  # 원하는 문장 입력
result = spell_checker.check(TEXT)

print(result.original)  # 원본 text
print(result.checked)   # 개선된 text