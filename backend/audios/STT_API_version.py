from google.cloud import speech
import ffmpeg
import os
def transcribe_file(speech_file):
    client = speech.SpeechClient()

    os.chdir('C:/Users/multicampus/Desktop/Sub-3/s03p23b107/frontend/src/assets/audios')
    os.system('ffmpeg -i '+speech_file+' -vn -acodec pcm_s16le -ar 44100 -ac 2 output.wav')

    with open('output.wav', 'rb') as audio_file:
        content = audio_file.read()

    audio = {"content":content}
    config = {
        "model":"command_and_search",
        "enable_separate_recognition_per_channel":True,
        "audio_channel_count":2,
        "language_code":'ko-KR',
    }

    response = client.recognize(config, audio)
    os.remove('output.wav')
    try:
        print(response.results[0].alternatives[0].transcript)
        print(response.results[0].alternatives[0].confidence)
        return [response.results[0].alternatives[0].transcript, response.results[0].alternatives[0].confidence]
    except:
        print('실패!')

# blob_filename = './Audio/1601643553055'  #
# os.system('ffmpeg -i '+blob_filename+' -vn -acodec pcm_s16le -ar 44100 -ac 2 output.wav') # blob --> wav 생성
# transcribe_file("output.wav")
# os.remove('output.wav') # wav 파일 삭제