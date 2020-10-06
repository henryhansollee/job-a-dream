import spacy
import clause
import nonClause
import identification

class AutomaticQuestionGenerator():
    def aqgParse(self, sentence):
        nlp = spacy.load('en_core_web_md')
        singleSentences = sentence.split(".")
        questionsList = []
        if len(singleSentences) != 0:
            for i in range(len(singleSentences)):
                segmentSets = singleSentences[i].split(",")

                ner = nerTagger(nlp, singleSentences[i])

                if (len(segmentSets)) != 0:
                    for j in range(len(segmentSets)):
                        try:
                            questionsList += clause.howmuch_2(segmentSets, j, ner)
                        except Exception:
                            pass

                        if identification.clause_identify(segmentSets[j]) == 1:
                            try:
                                questionsList += clause.whom_1(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.whom_2(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.whom_3(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.whose(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.what_to_do(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.who(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.howmuch_1(segmentSets, j, ner)
                            except Exception:
                                pass
                            try:
                                questionsList += clause.howmuch_3(segmentSets, j, ner)
                            except Exception:
                                pass


                            else:
                                try:
                                    s = identification.subjectphrase_search(segmentSets, j)
                                except Exception:
                                    pass

                                if len(s) != 0:
                                    segmentSets[j] = s + segmentSets[j]
                                    try:
                                        questionsList += clause.whom_1(segmentSets, j, ner)
                                    except Exception:
                                        pass
                                    try:
                                        questionsList += clause.whom_2(segmentSets, j, ner)
                                    except Exception:
                                        pass
                                    try:
                                        questionsList += clause.whom_3(segmentSets, j, ner)
                                    except Exception:
                                        pass
                                    try:
                                        questionsList += clause.whose(segmentSets, j, ner)
                                    except Exception:
                                        pass
                                    try:
                                        questionsList += clause.what_to_do(segmentSets, j, ner)
                                    except Exception:
                                        pass
                                    try:
                                        questionsList += clause.who(segmentSets, j, ner)
                                    except Exception:
                                        pass

                                    else:
                                        print(segmentSets)
                                        try:
                                            questionsList += nonClause.what_whom1(segmentSets, j, ner)
                                        except Exception:
                                            pass
                                        try:
                                            questionsList += nonClause.what_whom2(segmentSets, j, ner)
                                        except Exception:
                                            pass
                                        try:
                                            questionsList += nonClause.whose(segmentSets, j, ner)
                                        except Exception:
                                            pass
                                        try:
                                            questionsList += nonClause.howmany(segmentSets, j, ner)
                                        except Exception:
                                            pass
                                        try:
                                            questionsList += nonClause.howmuch_1(segmentSets, j, ner)
                                        except Exception:
                                            pass
        return questionsList


def nerTagger(nlp, tokenize):
    doc = nlp(tokenize)
    finalList = []
    array = [[]]
    for word in doc:
        array[0] = 0
        for ner in doc.ents:
            if ner.text == word.text:
                finalList.append((word.text, ner.label_))
                array[0] = 1
        if not array[0]:
            finalList.append((word.text, 'O'))
    return finalList