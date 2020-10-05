from google.cloud import speech

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
        print(response.results[0].alternatives[0].transcript)
        print(response.results[0].alternatives[0].confidence)
    except:
        print('실패!')

transcribe_file("output.wav")