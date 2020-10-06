from hanspell import spell_checker
TEXT = '안녕 하세요. 저는 한국인 입니다. 이문장은 한글로 작성됬습니다.'  # 원하는 문장 입력
result = spell_checker.check(TEXT)

print(result.original)  # 원본 text
print(result.checked)   # 개선된 text