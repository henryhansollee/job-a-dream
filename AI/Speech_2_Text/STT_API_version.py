from google.cloud import speech
import os, ffmpeg
from konlpy.tag import Okt
from collections import defaultdict
okt = Okt()
Nouns = defaultdict(int)

def transcribe_file(speech_file):
    client = speech.SpeechClient()

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
        sentence, confidence =  result.transcript, result.confidence

        print(sentence); print(confidence)
        N = okt.nouns(sentence)
        for n in N: Nouns[n] += 1
        print(Nouns)

    except:
        print('실패!')

blob_filename = './Audio/1601643553055'  #
os.system('ffmpeg -i '+blob_filename+' -vn -acodec pcm_s16le -ar 44100 -ac 2 output.wav') # blob --> wav 생성
# ffmpeg.input(blob_filename).output('output.wav', format='wav', acodec='pcm_s16le', ac=2, ar='44100').run(overwrite_output=True)
transcribe_file("output.wav")
os.remove('output.wav') # wav 파일 삭제