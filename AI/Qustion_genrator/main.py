# coding=utf-8
from konlpy.tag import Komoran
from random import sample
# No_nouns = ['을', '를', '에', '의', '로', '고', '은', '는']

def question_generator():
    komo = Komoran()

    Text = r'''
    제가 삼성SDS에 지원한 이유는 충분한 성장가능성 때문입니다. 
    삼성SDS는 매년 매출규모를 상승시키고 있습니다. 그러나
    아이폰은 매우 좋은 아이템이기에 갤럭시는 비교가 안됩니다.'''
    question = []
    for value, tag in set(komo.pos(Text)):
        if tag == 'NNP' and value != '제가':
            question.append(['왜 '+ value+ '인가요?'])
            question.append([value + '에 대해서 자신이 아는대로 설명해주세요.'])
            question.append([value + '의 장단점이 무엇이라고 생각하시나요?'])
    print(sample(question, 3))
    return sample(question, 3)
question_generator()