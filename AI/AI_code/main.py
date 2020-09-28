from google.cloud import translate_v2
import aqgFunction
from hanspell import spell_checker

# Main Function
def main():
    # Create AQG object
    translate_client = translate_v2.Client()
    aqg = aqgFunction.AutomaticQuestionGenerator()
    kor_text = "안녕하세요 이번 삼성전자에 지원한 편재호입니다."
    eng_text = translate_client.translate(kor_text, target_language='en')['translatedText']
    print(eng_text)
    kor_question = []
    questionList = aqg.aqgParse(eng_text)
    for q in questionList:
        string = translate_client.translate(q, target_language='ko')['translatedText']
        result_Q = spell_checker.check(string).checked
        print(result_Q)
        print(spell_checker.check(string).original)
        kor_question.append(result_Q)
    print(kor_question)
    # aqg.display(kor_question)

    return 0


# Call Main Function
if __name__ == "__main__":
    main()

