import spacy
import clause
import nonClause
import identification
import questionValidation
from nlpNER import nerTagger

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

                # questionsList.append('\n')
        return questionsList

    # AQG Display the Generated Question
    def Check(self, string):
        tmp = []
        for i in range(len(string)):
            if len(string[i]) > 2:
                if questionValidation.hNvalidation(string[i]) == 1:
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
