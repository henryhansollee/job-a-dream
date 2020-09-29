from google.cloud import speech
import io

def transcribe_file(speech_file):
    client = speech.SpeechClient()

    with io.open(speech_file, 'rb') as audio_file:
        content = audio_file.read()
    print('분석중....')

    audio = {"content":content}
    config = {
        # "encoding":enums.RecognitionConfig.AudioEncoding.LINEAR16,
        # "model":"command_and_search"
        "enable_separate_recognition_per_channel":True,
        "audio_channel_count":2,
        "language_code":'ko-KR',
    }

    response = client.recognize(config, audio)
    print(response.results[0].alternatives[0].transcript)
    print(response.results[0].alternatives[0].confidence)

transcribe_file("./audio_files/녹음.wav")