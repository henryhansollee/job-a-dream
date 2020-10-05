from google.cloud import translate_v2
import aqgFunction
from hanspell import spell_checker

# Main Function
def main():
    # Create AQG object
    translate_client = translate_v2.Client()
    aqg = aqgFunction.AutomaticQuestionGenerator()
    kor_text = "Hello, I am Jaeho Pyun who applied to Samsung Electronics this time."
    # eng_text = translate_client.translate(kor_text, target_language='en')['translatedText']
    # print(eng_text)
    kor_question = []
    questionList = aqg.aqgParse(kor_text)
    for q in questionList:
        # string = translate_client.translate(q, target_language='ko')['translatedText']
        # result_Q = spell_checker.check(string).checked
        # print(spell_checker.check(string).original)
        result_Q = spell_checker.check(q).checked
        print(spell_checker.check(q).original)
        kor_question.append(result_Q)
    # aqg.display(kor_question)

    return 0


# Call Main Function
if __name__ == "__main__":
    main()

