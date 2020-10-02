from google.cloud import speech
from google.cloud.speech import enums
import io, os
# import scipy.io.wavfile

def transcribe_file(speech_file):
    client = speech.SpeechClient()

    os.chdir('C:/Users/multicampus/Desktop/Sub-3/s03p23b107/frontend/src/assets/audios')
    with io.open(speech_file, 'rb') as audio_file:
        content = audio_file.read()
    print('분석중....')

    # samplerate, data = scipy.io.wavfile.read(speech_file)
    # print(samplerate, '여기를 보시오~~~~~~~~~~~~~')

    audio = {"content":content}
    config = {
        # "encoding":enums.RecognitionConfig.AudioEncoding.FLAC,
        # "model":"command_and_search",
        "enable_separate_recognition_per_channel":True,
        "audio_channel_count":2,
        "language_code":'ko-KR',
        "sample_rate_hertz": 16000
    }

    response = client.recognize(config, audio)
    print(response, '결과입니다')
    # print(response.results[0].alternatives[0].transcript)
    # print(response.results[0].alternatives[0].confidence)
