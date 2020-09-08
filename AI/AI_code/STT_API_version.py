import speech_recognition as sr
import moviepy.editor as mp
print(sr.__version__)

r = sr.Recognizer()

audio_file = sr.AudioFile('./audio_files/harvard.wav')

with audio_file as file:
    audio = r.record(file)


"""
# 마이크로 출력되는 음성을 텍스트 변환

mic = sr.Microphone(device_index=0)
# print(sr.Microphone.list_microphone_names())

with mic as MIC:
    audio = r.listen(MIC)

"""

"""
# 비디오 파일에서 음성 추출

# clip = mp.VideoFileClip("./audio_files/Video_name.mp4")
# clip.audio.write_audiofile("./audio_files/Video_name.wav")
# audio_file = sr.AudioFile('./audio_files/Video_name.wav')

with audio_file as file:
    audio = r.record(file)
"""

try:
    print("you said : " + r.recognize_google(audio, language='us'))
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))
