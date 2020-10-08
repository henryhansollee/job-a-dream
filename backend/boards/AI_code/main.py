from google.cloud import translate_v2
from . import aqgFunction
from hanspell import spell_checker

def Check(string):
    tmp = []
    for i in range(len(string)):
        if len(string[i]) > 2:
            if hNvalidation(string[i]) == 1:
                if ((string[i][0] == 'W' and string[i][1] == 'h') or (string[i][0] == 'H' and string[i][1] == 'o') or
                        (string[i][0] == 'H' and string[i][1] == 'a')):
                    WH = string[i].split(',')
                    if len(WH) == 1:
                        string[i] = string[i][:-1]
                        string[i] = string[i][:-1]
                        string[i] = string[i][:-1]
                        string[i] = string[i] + "?"
                        tmp.append(string[i])
    return tmp


def hNvalidation(sentence):
    flag = 1

    Length = len(sentence)
    if Length > 4:
        for i in range(Length):
            if i + 4 < Length:
                if sentence[i] == ' ' and sentence[i + 1] == 'h' and sentence[i + 2] == ' ' and sentence[
                    i + 3] == 'N' and sentence[i + 4] == ' ':
                    flag = 0
    return flag


def main(text):
    translate_client = translate_v2.Client()
    aqg = aqgFunction.AutomaticQuestionGenerator()
    kor_text = text
    eng_text = translate_client.translate(kor_text, target_language='en')['translatedText']
    # eng_text = "Hello, I am Jaeho Pyun who applied to Samsung Electronics this time. "

    kor_question = []
    questionList = aqg.aqgParse(eng_text)
    result_question = Check(questionList)
    for q in result_question:
        string = translate_client.translate(q, target_language='ko')['translatedText']
        result_Q = spell_checker.check(string).checked
        kor_question.append(result_Q)
        # kor_question.append(q)
    print(kor_question)
    return kor_question