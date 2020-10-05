from google.cloud import speech
import ffmpeg, os
from collections import defaultdict

def transcribe_file(speech_file):
    client = speech.SpeechClient()

    """
    from konlpy.tag import Okt
    okt = Okt()
    Nouns = defaultdict(int)
    """

    with open(speech_file, 'rb') as audio_file:
        content = audio_file.read()

    audio = {"content":content}
    config = {
        "model":"command_and_search",
        "enable_separate_recognition_per_channel":True,
        "audio_channel_count":2,
        "language_code":'ko-KR',
    }

    response = client.recognize(config, audio)
    try:
        result = response.results[0].alternatives[0]
        sentence, confidence = result.transcript, result.confidence
        # for noun in okt.nouns(sentence): Nouns[noun] += 1
        # print(Nouns)  # 명사와 그 빈도수 출력 (자연어 처리 모듈 설치 필요)
        print(sentence)
        print(confidence)
    except:
        print('실패!')

blob_filename = '1601643553055'
ffmpeg.input(blob_filename).output('output.wav', format='wav', acodec='pcm_s16le', ac=2, ar='44100').run(overwrite_output=True)
transcribe_file("output.wav")
os.remove('output.wav') # wav 파일 삭제