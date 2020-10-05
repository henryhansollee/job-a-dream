from google.cloud import speech
from google.cloud.speech import enums
import io

def transcribe_file(speech_file):
    client = speech.SpeechClient()

    with io.open(speech_file, 'rb') as audio_file:
        content = audio_file.read()
    print('분석중....')

    audio = {"content":content}
    config = {
        "encoding":enums.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
        "model":"command_and_search",
        "enable_separate_recognition_per_channel":True,
        "audio_channel_count":2,
        "language_code":'ko-KR',
        "sample_rate_hertz": 44100
    }

    response = client.recognize(config, audio)
    # print(response.results[0].alternatives[0].transcript)
    # print(response.results[0].alternatives[0].confidence)
    print(response)

transcribe_file("1601643553055")