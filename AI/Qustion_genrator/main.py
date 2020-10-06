from google.cloud import translate_v2
import aqgFunction
from hanspell import spell_checker

def main():
    translate_client = translate_v2.Client()
    aqg = aqgFunction.AutomaticQuestionGenerator()
    kor_text = "안녕하세요 이번 삼성전자에 지원한 편재호입니다."
    eng_text = translate_client.translate(kor_text, target_language='en')['translatedText']
    # eng_text = "Hello, I am Jaeho Pyun who applied to Samsung Electronics this time."

    kor_question = []
    questionList = aqg.aqgParse(eng_text)
    result_question = aqg.Check(questionList)
    for q in result_question:
        string = translate_client.translate(q, target_language='ko')['translatedText']
        result_Q = spell_checker.check(string).checked
        kor_question.append(result_Q)
    print(kor_question)
    return 0


# Call Main Function
if __name__ == "__main__":
    main()

